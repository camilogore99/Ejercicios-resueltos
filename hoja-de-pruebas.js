// const users = [ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, { name: 'Andrea', email: 'andrea@gmail.com', age: 30 } ]

// const attendance = [ { email: 'georg@academlo.com', attendance: true }, { email: 'andrea@gmail.com', attendance: false } ]

// const clave = 'email'
// const value = 'georg@academlo.com'

// // console.log( users[0][`${clave}`] === value  );
// // console.log( users[1] );agregar un 
// // console.log( 'xxxxxxxxxxxxxxxxxxxxxxxxx' );

// //==================================================//
// let obj = [];

// for (let i = 0; i < users.length; i++) {
//       obj.push(Object.assign( users[i], attendance[i]))
// }
// return obj;

// let numero = 30;
// numero > 0 && numero % 5 == 0 ? console.log("Si, el número "+numero+ " es múltiplo de 5") : console.log("No, el número "+numero+ " no es múltiplo de 5");

// let numero1 = 37;
// let numero2 = 78;   // 3 = para los numeros que terminan en 8  -> % 5 <-
// let numero3 = 69;   // 4 = para los numeros que terminan en 9  -> % 5 <-
// let numero4 = 54;   // 4 = para los numeros que terminan en 4  -> % 10 <-
// let numero5 = 63;   // 3 = para los numeros que terminan en 4  -> % 10 <-

// console.log( numero3 % 10  );

// let num = 2;
// console.log( num % 2 );




// ======================================== ========================================== ============
/////////////// ignorar por encima de esta línea //////////////////////

// isFactor = (a,b) => a % b === 0

// function main() {
//     let n_temp = readLine().split(' ');
//     let n = parseInt(n_temp[0]);
//     let m = parseInt(n_temp[1]);
//     a = readLine().split(' ');
//     a = a.map(Number);
//     b = readLine().split(' ');
//     b = b.map(Number);

//   let results = []
//   for (let i = a[n-1];i <= b[0]; i++) {
//     if (a.every( ( x ) => isFactor( i, x ) ) && b.every( ( x ) => isFactor( x, i ) ) ) results.push(i)
//   }
  
//   console.log(results.length)
// }

// console.log( (/2) % 2 === 0 );

const cadena = '12:01:00AM';

console.log( parseInt(cadena) );