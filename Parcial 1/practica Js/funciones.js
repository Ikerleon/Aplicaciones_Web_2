//1. Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo con por lo menos 5 elementos.
// información de los clientes
const clientes = [
  {
    idCliente: 1,
    nombre: 'Ana García',
    apellido: 'Lopez',
    direccion: 'Calle la paz',
    email: 'ana.garcia@example.com',
    telefono: '12112123',
  },
  {
    idCliente: 2,
    nombre: 'Anthony Luis',
    apellido: 'Rodríguez',
    direccion: 'Avenida del Sol',
    email: 'Anthony.Luis@example.com',
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
  }
];

//2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3 instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.
//foreach
console.log("Con forEach");
for (let i = 0; i < 3; i++) {
  console.log(`Recorrido ${i + 1}:`);
  clientes.forEach((cliente, index) => {
    console.log('ID:', cliente.idCliente);
    console.log('Nombre:', cliente.nombre);
    console.log('Apellido:', cliente.apellido);
    console.log('Dirección:', cliente.direccion);
    console.log('Email:', cliente.email);
    console.log('Teléfono:', cliente.telefono);
    console.log('--------------------');
  });
}
//for in
console.log("Con for in");
for (let i = 0; i < 3; i++) {
  console.log(`Recorrido ${i + 1}:`);
  for (let index in clientes) {
    const cliente = clientes[index];
    console.log('ID:', cliente.idCliente);
    console.log('Nombre:', cliente.nombre);
    console.log('Apellido:', cliente.apellido);
    console.log('Dirección:', cliente.direccion);
    console.log('Email:', cliente.email);
    console.log('Teléfono:', cliente.telefono);
    console.log('--------------------');
  }
}
console.log("Con for of");
// for of
for (let i = 0; i < 3; i++) {
  console.log(`Recorrido ${i + 1}:`);
  let index = 1;
  for (let cliente of clientes) {
    console.log('ID:', cliente.idCliente);
    console.log('Nombre:', cliente.nombre);
    console.log('Apellido:', cliente.apellido);
    console.log('Dirección:', cliente.direccion);
    console.log('Email:', cliente.email);
    console.log('Teléfono:', cliente.telefono);
    console.log('--------------------');
    index++;
  }
}
//3.Definir una función con Callback que reciba como parámetro su arreglo de elementos y un ID y devuelva el objeto correspondiente, luego mostrarlo por consola usando el callback.
function obtenerClientePorID(id, callback) {
  const clienteEncontrado = clientes.find(cliente => cliente.idCliente === id);
  if (!clienteEncontrado) {
    return callback("No se encontró al cliente");
  }
  return callback(null, clienteEncontrado);
}

obtenerClientePorID(5, (error, cliente) => {
  if (error) {
    console.log(error);
  }
  console.log(cliente);
});
