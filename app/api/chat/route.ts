import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    console.log("API hit");

    if (!N8N_WEBHOOK_URL) {
      console.error("Missing N8N_WEBHOOK_URL");
      return NextResponse.json(
        { error: "N8N_WEBHOOK_URL is missing" },
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log("Incoming body:", body);

    if (!body.userId || !body.text) {
      return NextResponse.json(
        { error: "userId and text are required" },
        { status: 400 }
      );
    }

    const payload = {
      messaging_product: "whatsapp",
      metadata: {
        display_phone_number: "custom_chat_ui",
        phone_number_id: "custom_chat_ui",
      },
      contacts: [
        {
          profile: {
            name: body.userName || "Unknown User",
          },
          wa_id: body.userId,
        },
      ],
      messages: [
        {
          from: body.userId,
          id: `msg_${Date.now()}`,
          timestamp: String(Math.floor(Date.now() / 1000)),
          type: body.messageType,
          mime_type: body.mime_type,
          text: {
            body: body.text,
          },
        },
      ],
      field: "messages",
    };

    console.log("Sending to n8n:", payload);
    console.log("Webhook URL:", N8N_WEBHOOK_URL);

    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("n8n status:", res.status);

    const rawText = await res.text();
    console.log("n8n raw response:", rawText);

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "n8n request failed",
          status: res.status,
          details: rawText,
        },
        { status: 500 }
      );
    }

    try {
      const data = JSON.parse(rawText);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({ raw: rawText });
    }
  } catch (error) {
    console.error("Full API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}