/*
  Warnings:

  - Added the required column `author` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `filmes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "filmes" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL;
