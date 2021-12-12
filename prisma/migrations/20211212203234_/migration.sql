-- CreateTable
CREATE TABLE "_UserTofilmes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserTofilmes_AB_unique" ON "_UserTofilmes"("A", "B");

-- CreateIndex
CREATE INDEX "_UserTofilmes_B_index" ON "_UserTofilmes"("B");

-- AddForeignKey
ALTER TABLE "_UserTofilmes" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTofilmes" ADD FOREIGN KEY ("B") REFERENCES "filmes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
