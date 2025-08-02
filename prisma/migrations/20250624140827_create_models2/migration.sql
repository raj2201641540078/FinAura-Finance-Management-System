/*
  Warnings:

  - The `recurringInterval` column on the `transactions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "RecurringInterval" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "recurringInterval",
ADD COLUMN     "recurringInterval" "RecurringInterval";

-- DropEnum
DROP TYPE "RecuuringInterval";
