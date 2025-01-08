/*
  Warnings:

  - You are about to drop the column `birthday` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `signature` on the `Author` table. All the data in the column will be lost.
  - The `price` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `bookTitle` on the `Publisher` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `promoText` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `specialPrice` on the `Sale` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ISBN]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `available` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sold_pieces` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percent` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_bookId_fkey";

-- DropIndex
DROP INDEX "Author_signature_key";

-- DropIndex
DROP INDEX "Publisher_bookTitle_key";

-- DropIndex
DROP INDEX "Sale_bookId_key";

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "birthday",
DROP COLUMN "signature";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ISBN" TEXT,
ADD COLUMN     "available" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "page_num" INTEGER,
ADD COLUMN     "saleId" TEXT,
ADD COLUMN     "sold_pieces" INTEGER NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
ALTER COLUMN "authorId" DROP NOT NULL,
ALTER COLUMN "publisherId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Publisher" DROP COLUMN "bookTitle";

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "bookId",
DROP COLUMN "promoText",
DROP COLUMN "specialPrice",
ADD COLUMN     "percent" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDetail" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "OrderDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_ISBN_key" ON "Product"("ISBN");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
