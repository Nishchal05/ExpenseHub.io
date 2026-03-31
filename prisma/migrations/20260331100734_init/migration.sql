-- CreateTable
CREATE TABLE "ExpenseSession" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "sourceMessageId" TEXT,
    "fileName" TEXT,
    "fileType" TEXT,
    "fileUrl" TEXT,
    "merchant" TEXT,
    "amount" DOUBLE PRECISION,
    "expenseDate" TIMESTAMP(3),
    "type" TEXT,
    "category" TEXT,
    "project" TEXT,
    "customer" TEXT,
    "event" TEXT,
    "note" TEXT,
    "extraFields" JSONB NOT NULL DEFAULT '{}',
    "pendingFields" JSONB NOT NULL DEFAULT '[]',
    "currentStep" TEXT NOT NULL DEFAULT 'queued',
    "currentFieldKey" TEXT,
    "status" TEXT NOT NULL DEFAULT 'queued',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "clientSynced" BOOLEAN NOT NULL DEFAULT false,
    "rawPayload" JSONB,
    "ocrText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpenseSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ExpenseSession_userId_createdAt_idx" ON "ExpenseSession"("userId", "createdAt");
