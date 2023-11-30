/*
  Warnings:

  - You are about to drop the column `idcategoria` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `idmarca` on the `Producto` table. All the data in the column will be lost.
  - Added the required column `idproducto` to the `Marca` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_idmarca_fkey";

-- AlterTable
ALTER TABLE "Foto" ALTER COLUMN "descripcion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Marca" ADD COLUMN     "idproducto" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "idcategoria",
DROP COLUMN "idmarca",
ALTER COLUMN "descripcion" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Marca" ADD CONSTRAINT "Marca_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "Producto"("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE;
