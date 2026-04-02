import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Fields that exist directly in Prisma model and are safe to update directly
const predefinedFields = new Set([
  'fileName',
  'fileType',
  'fileUrl',
  'merchant',
  'amount',
  'expenseDate',
  'type',
  'category',
  'project',
  'customer',
  'event',
  'note',
  'currentStep',
  'currentFieldKey',
  'status',
  'isActive',
  'clientSynced',
  'ocrText',
  'rawPayload',
  'pendingFields',
  'extraFields',
]);

// Optional aliases if your workflow sends different names
const keyAliases: Record<string, string> = {
  anynote: 'note',
  date: 'expenseDate',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { userId, sourceMessageId, ...updateFields } = body;

    if (!userId || !sourceMessageId) {
      return NextResponse.json(
        {
          success: false,
          error: 'userId and sourceMessageId are required',
        },
        { status: 400 }
      );
    }

    const existing = await prisma.expenseSession.findFirst({
      where: {
        userId,
        sourceMessageId,
      },
    });

    const directData: Record<string, any> = {};
    const extraFieldsData: Record<string, any> =
      existing?.extraFields &&
      typeof existing.extraFields === 'object' &&
      !Array.isArray(existing.extraFields)
        ? { ...(existing.extraFields as Record<string, any>) }
        : {};

    for (const [rawKey, rawValue] of Object.entries(updateFields)) {
      const key = keyAliases[rawKey] || rawKey;
      let value = rawValue;

      // Normalize type
      if (key === 'type' && value != null) {
        value = String(value).toLowerCase();
      }

      // Handle rawPayload
      if (
        key === 'rawPayload' &&
        value &&
        typeof value === 'object' &&
        !Array.isArray(value)
      ) {
        const rawPayload = value as Record<string, any>;

        const extractedFileType =
          typeof rawPayload.data === 'string' &&
          rawPayload.data.startsWith('data:')
            ? rawPayload.data.split(';')[0].replace('data:', '')
            : rawPayload.dataType ?? null;

        if (!directData.fileType && extractedFileType) {
          directData.fileType = extractedFileType;
        }

        directData.rawPayload = {
          userName: rawPayload.userName ?? null,
          messageType: rawPayload.messageType ?? null,
          dataType: rawPayload.dataType ?? null,
          data: rawPayload.data ?? null,
        };

        continue;
      }

      if (predefinedFields.has(key)) {
        directData[key] = value;
      } else {
        extraFieldsData[key] = value;
      }
    }

    // 🔹 UPDATE
    if (existing) {
      const session = await prisma.expenseSession.update({
        where: { id: existing.id },
        data: {
          ...directData,
          extraFields: extraFieldsData,
        },
      });

      return NextResponse.json({
        success: true,
        action: 'updated',
        session,
      });
    }

    // 🔹 CREATE (new session)
    const session = await prisma.expenseSession.create({
      data: {
        userId,
        sourceMessageId,
        ...directData,
        extraFields: extraFieldsData,
        status: 'queued',
        isActive: true,
      },
    });

    return NextResponse.json({
      success: true,
      action: 'created',
      session,
    });

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

    if (userId) {
      const sessions = await prisma.expenseSession.findMany({
        where: { userId },
        orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      });

      return NextResponse.json({
        success: true,
        count: sessions.length,
        sessions,
      });
    }

    const sessions = await prisma.expenseSession.findMany({
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
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
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'userId is required' },
        { status: 400 }
      );
    }

    const deletedSessions = await prisma.expenseSession.deleteMany({
      where: { userId },
    });

    return NextResponse.json({
      success: true,
      message: 'All expenses deleted successfully',
      deletedCount: deletedSessions.count,
    });
  } catch (error) {
    console.error('DELETE ERROR:', error);

    return NextResponse.json(
      { success: false, message: 'Something went wrong' },
      { status: 500 }
    );
  }
}