// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();
// Como segundo paso se crea el producto, para esto se creo una funcion asincrona crearProducto
const crearProducto= async ()=>{
      const producto = await prisma.producto.create({
        data: {
          idcategoria: 1,
          nombre: "Blusa",
          descripcion: "Blusa azul",
          precio: 15.00,
          marca: {
            connect: { idmarca: 1 }  // Aquí debes conectar con la marca que desees
          },
          fotos: {
            create: {
              archivo:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffotoneac.com%2F4-tipos-de-fotos-para-marcas-de-ropa%2F&psig=AOvVaw2PoVSq0LsCC3qFWnEeyM7b&ust=1696610925181000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjXwa2u34EDFQAAAAAdAAAAABAE",
              descripcion: "Blusa azul",
            },
          },
        },
      });
      console.log("Producto creado:", producto);
}
// Primero se crea la marca, en este caso se creo una funcion asincrona crearMarca
const crearMarca= async ()=>{
    const marca = await prisma.marca.create({
        data: {
          nombre: "Tommy",
          productos: {
            create: {
              idcategoria: 1,
              nombre: "Blusa",
              descripcion: "Blusa azul",
              precio: 15.00,
              fotos: {
                create: {
                  archivo: "https://www.example.com/imagen.jpg",
                  descripcion: "Descripción de la imagen",
                },
              },
            },
          },
        },
      });
      console.log("Marca creada:", marca);
}
// Para leer el producto se creo una funcion asincrona leerProducto
const leerProducto= async ()=>{
    const producto= await prisma.producto.findMany({
        include:{
            fotos:true
        }
        , where:{
            idproducto:1
        }
    })
    console.log(producto)
}
// Para leer la marca se creo una funcion asincrona leerMarca
const leerMarca= async ()=>{
    const marca= await prisma.marca.findMany({
        include:{
            productos:true
        }
        , where:{
            idmarca:1
        }
    })
    console.log(marca)
}
// Para actualizar el producto se creo una funcion asincrona actualizarProducto
const actualizarProducto= async ()=>{
    const producto= await prisma.producto.update({
        data:{
            nombre:"Pantalon"
        },
        where:{
            idproducto:1
        }
    })
}
// Para actualizar la marca se creo una funcion asincrona actualizarMarca
const actualizarMarca= async ()=>{
    const marca= await prisma.marca.update({
        data:{
            nombre:"Lee"
        },
        where:{
            idmarca:1
        }
    })
}
// Para eliminar el producto es nesesario eliminar primero la foto, para eliminar el producto se creo una funcion asincrona eliminarProducto
const eliminarProducto= async ()=>{
    const producto= await prisma.producto.delete({
        where:{
            idproducto:1
        }
    })
}
// Para eliminar la marca es nesesario eliminar primero el producto, para eliminar la marca se creo una funcion asincrona eliminarMarca
const eliminarMarca= async ()=>{
    const marca= await prisma.marca.delete({
        where:{
            idmarca:1
        }
    })
}
// Para eliminar el producto es nesesario eliminar primero la foto, para eliminar la foto se creo una funcion asincrona eliminarFoto 
const eliminarFoto= async ()=>{
    const foto= await prisma.foto.delete({
        where:{
            idfoto:1
        }
    })
}

(async ()=>{
    // await createUser()
    await eliminarMarca()

})()