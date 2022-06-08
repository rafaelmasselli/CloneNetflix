/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `filmes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "filmes_name_key" ON "filmes"("name");
