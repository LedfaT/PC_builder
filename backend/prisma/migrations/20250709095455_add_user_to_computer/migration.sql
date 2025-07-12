-- AlterTable
ALTER TABLE "computer" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
