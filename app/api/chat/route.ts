import { NextRequest, NextResponse } from "next/server";

type MessageType =
  | "text"
  | "button_reply"
  | "list_reply"
  | "image"
  | "document";

interface ChatRequestBody {
  sessionId?: string;
  userId: string;
  userName?: string;
  messageId?: string;
  timestamp?: string;
  messageType: MessageType;

  // text
  text?: string;

  // button
  buttonId?: string;
  buttonTitle?: string;

  // list
  listId?: string;
  listTitle?: string;
  description?: string;

  // file/image/document
  fileUrl?: string;
  mimeType?: string;
  fileName?: string;
  caption?: string;
}

interface WhatsAppLikePayload {
  messaging_product: string;
  metadata: {
    display_phone_number: string;
    phone_number_id: string;
  };
  contacts: Array<{
    profile: {
      name: string;
    };
    wa_id: string;
  }>;
  messages: Array<Record<string, unknown>>;
  field: "messages";
  sessionId?: string;
}

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

function buildWhatsAppLikePayload(body: ChatRequestBody): WhatsAppLikePayload {
  const timestamp = body.timestamp || String(Math.floor(Date.now() / 1000));
  const messageId = body.messageId || `msg_${Date.now()}`;
  const userName = body.userName || "Unknown User";

  const baseMessage = {
    from: body.userId,
    id: messageId,
    timestamp,
  };

  let message: Record<string, unknown>;

  switch (body.messageType) {
    case "text":
      message = {
        ...baseMessage,
        type: "text",
        text: {
          body: body.text || "",
        },
      };
      break;

    case "button_reply":
      message = {
        ...baseMessage,
        type: "interactive",
        interactive: {
          type: "button_reply",
          button_reply: {
            id: body.buttonId || "",
            title: body.buttonTitle || "",
          },
        },
      };
      break;

    case "list_reply":
      message = {
        ...baseMessage,
        type: "interactive",
        interactive: {
          type: "list_reply",
          list_reply: {
            id: body.listId || "",
            title: body.listTitle || "",
            description: body.description || "",
          },
        },
      };
      break;

    case "image":
      message = {
        ...baseMessage,
        type: "image",
        image: {
          mime_type: body.mimeType || "application/octet-stream",
          id: `file_${Date.now()}`,
          url: body.fileUrl || "",
          caption: body.caption || "",
        },
      };
      break;

    case "document":
      message = {
        ...baseMessage,
        type: "document",
        document: {
          mime_type: body.mimeType || "application/octet-stream",
          id: `file_${Date.now()}`,
          url: body.fileUrl || "",
          filename: body.fileName || "document",
          caption: body.caption || "",
        },
      };
      break;

    default:
      message = {
        ...baseMessage,
        type: "text",
        text: {
          body: body.text || "",
        },
      };
  }

  return {
    messaging_product: "custom_chat",
    metadata: {
      display_phone_number: "custom_chat_ui",
      phone_number_id: "custom_chat_ui",
    },
    contacts: [
      {
        profile: {
          name: userName,
        },
        wa_id: body.userId,
      },
    ],
    messages: [message],
    field: "messages",
    sessionId: body.sessionId,
  };
}

function validateBody(body: Partial<ChatRequestBody>): string | null {
  if (!body.userId) return "userId is required";
  if (!body.messageType) return "messageType is required";

  switch (body.messageType) {
    case "text":
      if (!body.text) return "text is required for messageType=text";
      break;
    case "button_reply":
      if (!body.buttonId) return "buttonId is required for button_reply";
      break;
    case "list_reply":
      if (!body.listId) return "listId is required for list_reply";
      break;
    case "image":
    case "document":
      if (!body.fileUrl) return "fileUrl is required for file/image/document";
      break;
  }

  return null;
}

export async function POST(req: NextRequest) {
  try {
    if (!N8N_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "N8N_WEBHOOK_URL is not configured" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as ChatRequestBody;

    const validationError = validateBody(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const whatsappLikePayload = buildWhatsAppLikePayload(body);

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(whatsappLikePayload),
      cache: "no-store",
    });

    const contentType = n8nResponse.headers.get("content-type") || "";

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      return NextResponse.json(
        {
          error: "n8n webhook request failed",
          status: n8nResponse.status,
          details: errorText,
        },
        { status: 502 }
      );
    }

    if (contentType.includes("application/json")) {
      const data = await n8nResponse.json();
      return NextResponse.json(data, { status: 200 });
    }

    const text = await n8nResponse.text();
    return NextResponse.json({ raw: text }, { status: 200 });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}