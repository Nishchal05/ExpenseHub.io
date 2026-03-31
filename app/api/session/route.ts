import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


// 🔹 CREATE SESSION (POST)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const session = await prisma.expenseSession.create({
      data: {
        userId: body.userId,
    
        sourceMessageId: body.sourceMessageId ?? null,
    
        fileType: body.data?.startsWith("data:")
          ? body.data.split(";")[0].replace("data:", "")
          : body.dataType ?? null,
    
        fileUrl: null, // later you can store uploaded file URL here
    
        merchant: body.merchant ?? null,
        amount: body.amount ?? null,
    
        expenseDate: body.date
          ? new Date(body.date)
          : null,
    
        type: body.type
          ? body.type.toLowerCase()
          : null,
    
        category: body.category ?? null,
    
        project: null,
        customer: null,
        event: null,
        note: null,
    
        extraFields: {},
    
        currentStep: "awaiting_category",
        status: "queued",
    
        rawPayload: {
          userName: body.rawPayloaduserName ?? null,
          messageType: body.rawPayload.messageType ?? null,
          dataType: body.rawPayload.dataType ?? null,
          data: body.rawPayload.data ?? null, // optional (base64)
        },
      },
    });
    return NextResponse.json({ success: true, session });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Failed to create session' },
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
    const latest = searchParams.get('latest');

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

    // ✅ Case 2: Get ONLY latest session
    if (userId && latest === 'true') {
      const session = await prisma.expenseSession.findFirst({
        where: { userId },
        orderBy: [
          { createdAt: 'desc' },
          { id: 'desc' }, // 🔥 tie-breaker
        ],
      });

      return NextResponse.json({ success: true, session });
    }

    // ✅ Case 3: Get all sessions of user
    if (userId) {
      const sessions = await prisma.expenseSession.findMany({
        where: { userId },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return NextResponse.json({ success: true, sessions });
    }

    // ✅ Case 4: Get all sessions
    const sessions = await prisma.expenseSession.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, sessions });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sessions' },
      { status: 500 }
    );
  }
}