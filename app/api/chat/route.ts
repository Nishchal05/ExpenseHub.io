import { NextRequest, NextResponse } from "next/server";

interface ChatRequestBody {
  userId: string;
  userName?: string;
  messageType: "text";
  text: string;
  messageId?: string;
  timestamp?: string;
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
  messages: Array<{
    from: string;
    id: string;
    timestamp: string;
    type: "text";
    text: {
      body: string;
    };
  }>;
  field: "messages";
}

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

function buildWhatsAppLikePayload(body: ChatRequestBody): WhatsAppLikePayload {
  const timestamp = body.timestamp || String(Math.floor(Date.now() / 1000));
  const messageId = body.messageId || `msg_${Date.now()}`;
  const userName = body.userName || "Unknown User";

  return {
    messaging_product: "whatsapp",
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
    messages: [
      {
        from: body.userId,
        id: messageId,
        timestamp,
        type: "text",
        text: {
          body: body.text,
        },
      },
    ],
    field: "messages",
  };
}

function validateBody(body: Partial<ChatRequestBody>): string | null {
  if (!body.userId) return "userId is required";
  if (!body.messageType) return "messageType is required";
  if (body.messageType !== "text") return "Only messageType=text is supported";
  if (!body.text) return "text is required for messageType=text";
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