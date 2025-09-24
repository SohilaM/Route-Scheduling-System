-- CreateEnum
CREATE TYPE "public"."LicenseType" AS ENUM ('PRIVATE', 'PUBLIC', 'TRUCK', 'MOTORCYCLE', 'BUS');

-- CreateTable
CREATE TABLE "public"."Drivers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "license_type" "public"."LicenseType" NOT NULL DEFAULT 'PRIVATE',
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Routes" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "startLocation" TEXT NOT NULL,
    "endLocation" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "estimatedTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Routes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Routes" ADD CONSTRAINT "Routes_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."Drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
