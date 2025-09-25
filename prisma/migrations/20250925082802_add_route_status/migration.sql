-- CreateEnum
CREATE TYPE "public"."RouteStatus" AS ENUM ('ASSIGNED', 'UNASSIGNED');

-- AlterTable
ALTER TABLE "public"."Routes" ADD COLUMN     "status" "public"."RouteStatus" NOT NULL DEFAULT 'UNASSIGNED';
