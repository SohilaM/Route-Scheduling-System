-- DropForeignKey
ALTER TABLE "public"."Routes" DROP CONSTRAINT "Routes_driverId_fkey";

-- AlterTable
ALTER TABLE "public"."Routes" ALTER COLUMN "driverId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Routes" ADD CONSTRAINT "Routes_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."Drivers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
