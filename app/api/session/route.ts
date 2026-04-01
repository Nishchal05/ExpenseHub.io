import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const rawPayload = body.rawPayload ?? {};

    const fileType =
      rawPayload.data?.startsWith('data:')
        ? rawPayload.data.split(';')[0].replace('data:', '')
        : rawPayload.dataType ?? null;

    const sessionData = {
      userId: body.userId,
      sourceMessageId: body.sourceMessageId ?? null,
      fileType,
      fileUrl: body.fileUrl ?? null,
      merchant: body.merchant ?? null,
      amount: body.amount ?? null,
      expenseDate: body.expenseDate,
      type: body.type ? String(body.type).toLowerCase() : null,
      category: body.category ?? null,
      project: body.project ?? null,
      customer: body.customer ?? null,
      event: body.event ?? null,
      note: body.note ?? null,
      extraFields: body.extraFields ?? {},
      currentStep: body.currentStep ?? 'awaiting_category',
      status: body.status ?? 'queued',
      isActive: body.isActive ?? true,
      rawPayload: {
        userName: rawPayload.userName ?? null,
        messageType: rawPayload.messageType ?? null,
        dataType: rawPayload.dataType ?? null,
      },
    };

    // ✅ If sourceMessageId present → upsert (update existing or create new)
    if (body.sourceMessageId) {
      const existing = await prisma.expenseSession.findFirst({
        where: {
          userId: body.userId,
          sourceMessageId: body.sourceMessageId,
        },
      });

      if (existing) {
        // 🔄 Update existing session
        const session = await prisma.expenseSession.update({
          where: { id: existing.id },
          data: sessionData,
        });

        return NextResponse.json({ success: true, session, action: 'updated' });
      }
    }

    // 🆕 Create new session (no sourceMessageId, or no existing match found)
    const session = await prisma.expenseSession.create({
      data: sessionData,
    });

    return NextResponse.json({ success: true, session, action: 'created' });

  } catch (error) {
    console.error('Failed to create/update session:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create/update session' },
      { status: 500 }
    );
  }
}
// 🔹 GET SESSION(S)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const userId = searchParams.get('userId');
    const id = searchParams.get('id');

    // ✅ Case 1: Get single session by ID
    if (id) {
      const session = await prisma.expenseSession.findUnique({
        where: { id: Number(id) },
      });

      if (!session) {
        return NextResponse.json(
          { success: false, error: 'Session not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, session });
    }

    // ✅ Case 2: Get ALL expense details for one user (latest -> oldest)
    if (userId) {
      const sessions = await prisma.expenseSession.findMany({
        where: { userId },
        orderBy: [
          { createdAt: 'desc' },
          { id: 'desc' },
        ],
      });

      return NextResponse.json({
        success: true,
        count: sessions.length,
        sessions,
      });
    }

    // ✅ Case 3: Get all sessions (latest -> oldest)
    const sessions = await prisma.expenseSession.findMany({
      orderBy: [
        { createdAt: 'desc' },
        { id: 'desc' },
      ],
    });

    return NextResponse.json({
      success: true,
      count: sessions.length,
      sessions,
    });
  } catch (error) {
    console.error('Failed to fetch sessions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sessions' },
      { status: 500 }
    );
  }
}
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    // ❗ Validate input
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "userId is required" },
        { status: 400 }
      );
    }

    const deletedSessions = await prisma.expenseSession.deleteMany({
      where: { userId },
    });

    return NextResponse.json({
      success: true,
      message: "All expenses deleted successfully",
      deletedCount: deletedSessions.count,
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}