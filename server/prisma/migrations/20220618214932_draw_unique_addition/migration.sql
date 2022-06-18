/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `draws` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `draws` MODIFY `country` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `draws_date_key` ON `draws`(`date`);
