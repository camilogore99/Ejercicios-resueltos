
/*
  Las variables con el nombre let se les puedo modicar su valor 
*/

// let nombre = ' pablo ';
// console.log(nombre);

// nombre = 'camilo';
// // console.log(nombre);

// let numero1 = 10;
// numero1 = 30;

/*
  las variables const no se le puede modifcar su valor 
*/

// const numero = 20;

// esto no se puede hacer 
// numero = 10;

// // console.log(numero1);
// console.log(numero);

const nombre = 'camilo';
const apellido = "gonzalez";
const edad = 19;

const nombreUsuario1 = `${nombre}`;
const nombreUsuario = nombre +" "+ apellido;

console.log( nombreUsuario );

for (let i = 0; i < numbers.length; i++) {
   const element = numbers[i];
   
}

// los arreglos se trabajan por posiciones y recauerda que para acceder a cada posicion ese mediante el nombre y los [].
const numeros = [10, 20, 30, 40]; // arreglo // 3 posiciones

// ===== for ===== //
// el ciclo for sirve para recorrer los arreglos cuando habalmos de recorrer es que podemos acceder a cada uno mediante la variable i 


// sintaxis //

// lei i = 0;  -> esta va ser la variable que va cambiar y se va aumentar de uno en uno 
// i < numeros.lenght -> esto quiere decir hasta que numero de veces se va recorer el ciclo 
// i++ -> es para que en cada iteracion la i que es la variable de las posiciones se incremente 
// for (let i = 0; i < numeros.length; i++) {
//    console.log(numeros[i]);
// }

// console.log(numeros[0], numeros[1], numeros[2], numeros[3]);


// ==== objetos ==== //

/*
  recuerda que los objetos tienen dos caracteristicas 
  CLAVE : Nombre  
  VALOR : 'Pablo'
  
  y para acceder a su valor es mediante el nombre del objeto en este caso usuario ponemos un punto usuario. y el nombre de la propiedad en este caso seria usuario.nombre y eso nos trae el valor que estamos buscando 
*/

const usuario1 = { nombre: 'pablo', apellido: 'garces' } // objeto 

// asi accedemos a las propiedades de los objetos 
// console.log(usuario1.nombre);
// console.log(usuario1.apellido);

const estudiantes = [
   {
      nombre: 'camilo',
      apellido: "gonzalez"
   },
   {
      nombre: 'pablo',
      apellido: 'garces'
   },
   {
      nombre: 'daniel',
      apellido: 'garces'
   },
   {
      nombre: 'valentina',
      apellido: 'garces'
   }
];

// for (let i = 0; i < estudiantes.length; i++) {
//    console.log(estudiantes[i].nombre);
//    console.log(estudiantes[i].apellido);
// }

// console.log(estudiantes[0].nombre);
// console.log(estudiantes[0].apellido);

