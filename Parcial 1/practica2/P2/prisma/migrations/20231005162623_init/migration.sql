-- CreateTable
CREATE TABLE "Producto" (
    "idproducto" SERIAL NOT NULL,
    "idcategoria" INTEGER NOT NULL,
    "idmarca" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("idproducto")
);

-- CreateTable
CREATE TABLE "Foto" (
    "idfoto" SERIAL NOT NULL,
    "idproducto" INTEGER NOT NULL,
    "archivo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("idfoto")
);

-- CreateTable
CREATE TABLE "Marca" (
    "idmarca" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("idmarca")
);

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_idmarca_fkey" FOREIGN KEY ("idmarca") REFERENCES "Marca"("idmarca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "Producto"("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE;
