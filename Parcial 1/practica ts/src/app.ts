
import { ICliente } from "./interfacs/ICliente";

// información de los clientes
const clientes: ICliente[] = [
  {
    idCliente: 1,
    nombre: 'Ana García',
    apellido: 'Lopez',
    direccion: 'Calle la paz',
    email: 'ana.garcia@gmail.com',
    telefono: '12112123',
  },
  {
    idCliente: 2,
    nombre: 'Anthony Luis',
    apellido: 'Rodríguez',
    direccion: 'Avenida del Sol',
    email: 'Anthony.Luis@gmail.com',
    telefono: '098121', 
},
{
  idCliente: 3,
  nombre: 'Jonathan Steven',
  apellido: 'Marin',
  direccion: 'Palmar',
  email: 'Marin111@example.com',
  telefono: '098122221',
},
{
  idCliente: 4,
  nombre: 'Danna Nicole',
  apellido: 'Loor',
  direccion: 'Santha Martha',
  email: 'Dannaloor@example.com',
  telefono: '567890',
},
{
  idCliente: 5,
  nombre: 'Iker Hernan',
  apellido: 'Leon',
  direccion: 'Tarqui',
  email: 'Ikerleon@example.com',
  telefono: '09876432',
}];
// Imprime la información del cliente
console.log("\nUsando for in:");
for (let i = 0; i < 3; i++) {
  for (const index in clientes) {
    const cliente = clientes[index];
    console.log("ID de Cliente:", cliente.idCliente, "Nombre:", cliente.nombre, 
      "Apellido:", cliente.apellido, "Dirección:", cliente.direccion, 
      "Email:", cliente.email, "Teléfono:", cliente.telefono);
  }
  console.log("-----------------------------");
}
// Imprime la información del cliente
console.log("Usando forEach:");
for (let i = 0; i < 3; i++) {
  clientes.forEach((cliente) => {
    console.log("ID de Cliente:", cliente.idCliente, "Nombre:", cliente.nombre, 
      "Apellido:", cliente.apellido, "Dirección:", cliente.direccion, 
      "Email:", cliente.email, "Teléfono:", cliente.telefono);
  });
  console.log("-----------------------------");
}
// Imprime la información del cliente
console.log("\nUsando for of:");
for (let i = 0; i < 3; i++) {
  for (const cliente of clientes) {
    console.log("ID de Cliente:", cliente.idCliente, "Nombre:", cliente.nombre, 
      "Apellido:", cliente.apellido, "Dirección:", cliente.direccion, 
      "Email:", cliente.email, "Teléfono:", cliente.telefono);
  }
  console.log("-----------------------------");
}
