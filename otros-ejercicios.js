// //     Este ejercicio consiste en recibir 2 números y crear un arreglo con los los múltiplos del primero siempre y cuando sean menores al segundo.   //

// const populateArray = (number, limit) => {
//     const arry = [];
//     let cont = number;
//     for (let i = 0; i < ( limit/number) - 2 ; i++) {
//         cont = cont + number;
//         arry[i] = cont
//     }
//     return arry
// }

// // console.log(populateArray( 2, 20 ));

// // 1. Crea un arreglo con los números del 1 al 400

// const arr = [];
// for (let i = 0; i < 401; i++) {
//       arr[i] = i;
// }

// // console.log(arr);

// // 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.

// const rank = ( num1, num2 ) => {
//       const arrayNum = [];
//       let cont = num1;
//       const interval = num2 - num1
//       for (let i = 0; i <= interval; i++) {
//             arrayNum[ i ] = cont;
//             cont += 1
//       }
//       // console.log(arrayNum);
// }

// rank( 1, 4 )

// // 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos número.
// const arregloNum = [ 1, 2, 3, 4, 5, 6 ];

// const readArray = ( arr ) => {
//       let acum = 0;
//       for (let i = 0; i < arr.length; i++) {
//             acum = acum + arr[i];
//       }
//       return acum
// }

// readArray( arregloNum );

// /*
//  4.  Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad

//  En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo 
//  [1, 3, 4] devolvemos el 3

//  En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array 
//  [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
// */

// const arr1 = [ 1, 2, 3 ];//  [2]  => 3
// const arr2 = [ 1, 2, 3, 4 ];//  [2][3]  => 4
// const arr3 = [ 1, 2, 3, 4, 5 ]//  [3]  => 5
// const arr4 = [ 1, 2, 3, 4, 5, 6 ];//  [3][4]  => 6
// const arr5 = [ 1, 2, 3, 4, 5, 6, 7 ];
// const arr6 = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
// const arr7 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];


// const receive = ( array ) => {
//       const arr = [];
//       const x = Math.round(array.length/3);
//       if ( ( array.length % 2 ) === 1 ) {
//             arr[0] = array[ x + 1 ];
//             return arr
//       } else {
//             arr[0] = array[ (array.length/2) - 1 ];
//             arr[1] = array[ (array.length/2)  ];
//             return arr
//       }
// }

// // console.log( receive( arr5 ) );


// /*
// Este ejercicio consiste en saber si una frase contiene o no una palabra en particular.

// Ejemplos

// La frase "Hoy es un buen día para programar" sí contiene la palabra "programar".
// La frase "Estoy aprendiendo mucho" no contiene la palabra "programar".

// */

// const findWord = (phrase, word) => {
//     const respues = phrase.lastIndexOf(word)
//     return((respues === -1) ?  false : true )
// }
// findWord( 'hola me llamo juan' , 'daniel');


// /*
// Encuentra la longitud de la última palabra en la frase frase
// Este ejercicio consiste en saber obtener la el número total de letras que contiene la última palabra de una frase.

// Ejemplos
// En la frase "Hoy es un buen día para programar " la última palabra que es "programar" contiene 9 letras.
// En la frase "Estoy aprendiendo mucho" la última palabra que es "mucho" contiene 5 letras.
// Descripción de la función
// Escribe el código necesario en la función countLastWordLength() para que retorne la cantidad de letras en la última palabra de la frase.
// */

// function countLastWordLength(phrase) {
//     const first = (phrase.lastIndexOf(" ") + 1);
//     const last = phrase.lastIndexOf("");
//      return ( last - first )
// }

// countLastWordLength( 'hola me llamo juan' );

// /*
// Reemplaza la última palabra de una frase
// Este ejercicio consiste en reemplazar la última palabra de una frase por otra palabra.

// Ejemplos
// En la frase "Tengo 10 años " reemplazamos la palabra "años" por "pesos" y la frase resultante es "Tengo 10 pesos".
// Descripción de la función
// Escribe el código necesario en la función replaceLastWord() para que retorne la frase con la última palabra cambiada.
// Parámetros de la función:
// string phrase: frase de la cual obtendrás la última palabra y posteriormente la reemplazarás.
// string word: palabra con la cuál reemplazarás la última palabra de la frase.
// Retorno de la función
// string: La nueva frase.  
// */

// const replaceLastWord = (phrase, word) => {
//     let res = phrase.split(" ");
//     res[res.length -1] = word;
//     return ( res.join(' ') )
// }

// replaceLastWord( 'hola me llamo juan', 'erik' );


// /*
// Suma de 3 edades encontradas en frases
// Este ejercicio consiste en sumas las edades de 3 usuarios, estos usuarios nos dan un texto y nuestro trabajo es obtener las edades de ese texto y sumarlas.

// Ejemplos
// Recibimos los siguientes 3 textos:

// "Me llamo Erik y tengo 8 años"
// "Me llamo Daniel y tengo 22 años"
// "Me llamo José y tengo 14 años"

// La suma total de las edades es 44

// Descripción de la función
// Escribe el código necesario en la función sumAges() para que retorne la suma de todas las edades. 
// */


// function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {

//     const one = firstUserPhrase.split(" ");
//     const num1 = one[ one.length -2 ];

//     const two = SecondUserPhrase.split(" ");
//     const num2 = two[ one.length -2 ]

//     const three = ThirdUserPhrase.split(" ");
//     const num3 = three[ one.length -2 ]

//     return ( (parseInt(num1,10)) + (parseInt(num2,10)) + (parseInt(num3,10)) )

// }

// sumAges( "Me llamo Erik y tengo 8 años", "Me llamo Daniel y tengo 22 años", "Me llamo José y tengo 14 años" );

// /*
// Suma los valores de un arreglo
// Este ejercicio consiste en sumar los valores de un arreglo con 3 elementos.

// Ejemplos
// Recibimos el siguiente arreglo:
// [1, 2, 3]

// La suma de los valores es 5

// Descripción de la función
// Escribe el código necesario en la función sumArrayValeus() para que retorne la suma de los elementos. 
// */

// function arraySumValues(array) {
//     let acum = 0;
//     for (let i = 0; i < array.length; i++) {
//         acum = acum + array[i];
//     }
//     return acum
// }

// arraySumValues( [5, 6, 3] );



// ///=======================================================////

// let num = 1;

// for (let i = 1; i < 51; i++) {
//       num = num + i; 
// }
// // console.log(num/50);

/*

Elimina un usuario
Este ejercicio consiste en eliminar un usuario (usando su correo como identificador) de un arreglo de usuarios.

Ejemplos
Recibimos los siguientes datos:

arreglo = [ { name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]

email = erik@academlo.com

El arreglo que debemos retornar es

[ { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]

Descripción de la función
Escribe el código necesario en la función deleteUser() para que retorne un arreglo con todos los usuarios menos el que se elimina.

*/

//onst user = [{ name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' },{ name: 'Erik', email: 'erik@academlo.com' } ];

// const deleteUser = ( email ) => {
//       for (let i = 0; i <= user.length; i++) {
//             if ( user[i].email === email ) {
//                   user.splice( i, 1 );                
//             }
//       }
//       return user
// }

// console.log( deleteUser( 'erik@academlo.com'  ) );


/*

Elimina un usuario

Este ejercicio consiste en encontrar y devolver el primer usuario en un arreglo que tenga el el valor que recibimos de una función. La función recibirá la clave que usaremos para la búsqueda y el valor que usaremos para buscar al usuario.

Ejemplos

Recibimos los siguientes datos:

users = [ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, { name: 'Andrea', email: 'andrea@gmail.com', age: 30 } ]

key = 'email'
value = 'georg@academlo.com'

El usuario que dedemos retornar es :

{ name: 'Georg', email: 'georg@academlo.com' }

Descripción de la función:

Escribe el código necesario en la función findUser() para que retorne un objeto que tenga valor y clave recibidos.

*/
// const users = [ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, { name: 'Andrea', email: 'andrea@gmail.com', age: 30 } ]


// function findUser( users, key, value ) {
//       console.log( key );
//       let aux = {};
//       for (let i = 0; i <= users.length; i++) {
//             if ( users[i][`${key}`] === value ) {
//                 return users[i]
//             }
//       }
// }
// console.log( findUser( users, 'age', 30 ) );


//  ===================================================================  //

/*

Elimina un usuario
Este ejercicio consiste en ordenar por 'score' de menor a mayor un arreglo de usuarios.

Ejemplos
Recibimos los siguientes datos:

users = [ { name: 'Georg', email: 'georg@academlo.com', score: 100 }, { name: 'Andrea', email: 'andrea@gmail.com', score: 70 }, { name: 'Andrés', email: 'andres@gmail.com', score: 34 } ]

El arreglo que dedemos retornar es:

[ { name: 'Andrés', email: 'andres@gmail.com', score: 34 }, { name: 'Andrea', email: 'andrea@gmail.com', score: 70 }, { name: 'Georg', email: 'georg@academlo.com', score: 100 } ]

Descripción de la función:

Escribe el código necesario en la función orderUsersByScore() para que retorne un arreglo con los usuarios ordenados por score.

*/

// const users = [ { name: 'Georg', email: 'georg@academlo.com', score: 100 }, { name: 'Andrea', email: 'andrea@gmail.com', score: 70 }, { name: 'Andrés', email: 'andres@gmail.com', score: 34 } ]

// const orderUsersByScore = () => {
//       let aux1 = {};
//       for (let i = 0; i < users.length; i++) {
//             for (let x = 1; x < users.length - i; x++) {
//                   if (users[x - 1].score > users[x].score) {
//                       aux1 = users[x - 1];
//                       users[ x - 1 ] = users[ x ];
//                       users[ x ] = aux1;
//                   }
//             }
//       }
//       return users
// }

//console.log( orderUsersByScore() );

/*

Mezclando datos de 2 arreglos

Este ejercicio consiste en mezclar la información de 2 arreglos usando como identificador el correo.

Ejemplos

Recibimos los siguientes datos:

users = [ { name: 'Georg', email: 'georg@academlo.com', }, { name: 'Andrea', email: 'andrea@gmail.com', } ];

attendance = [ { email: 'georg@academlo.com', attendance: true }, { email: 'andrea@gmail.com', attendance: false } ]

El arreglo que dedemos retornar es:

[ { name: 'Georg', email: 'georg@academlo.com', attendance: true }, { name: 'Andrea', email: 'andrea@gmail.com', attendance: false } ];

Descripción de la función:

Escribe el código necesario en la función mergeData() para que retorne un arreglo de objetos con los datos correspondientes.

Parámetros de la función:

array users: El arreglo de usuarios.

array attendance: La información de asistencia, que deberá menzclarse con la de usuarios.

Retorno de la función:

array: Arreglo con los datos mezclados de ambos arreglos.

*/

// const users = [ { name: 'Georg', email: 'georg@academlo.com', }, { name: 'Andrea', email: 'andrea@gmail.com', } ];

// const attendance = [ { email: 'georg@academlo.com', attendance: true }, { email: 'andrea@gmail.com', attendance: false } ]

// const mergeData = (users, attendance) => {
//     let obj = [];
//     for (let i = 0; i < users.length; i++) {
//         obj.push(Object.assign( users[i], attendance[i]));
//     }
//     return obj;
// }

// console.log(mergeData());


// ================================= // ==================================== //
/*
 Diff Two Arrays
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

Nota: Puedes devolver el arreglo con sus elementos en cualquier orden.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] debe devolver ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] debe devolver [].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) debe devolver [4]
*/

const arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
function diffArray(arr1, arr2) {
   let noThis = false;
   let noThis2 = false;
   const arr = [];
   for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
         if ( arr1[i] === arr2[j] ){
            noThis = true;
         }
      }
      if (noThis === false){
         arr.push(arr1[i])
      }
      noThis = false;
   }

   for (let x = 0; x < arr2.length; x++) {
      for (let h = 0; h < arr1.length; h++) {
         if ( arr2[x] === arr1[h] ){
            noThis2 = true;
         }
      }
      if (noThis2 === false){
         arr.push(arr2[x])
      }
      noThis2 = false;
   } 
   return arr 
}
// console.log( diffArray( arr1, arr2 ));



// ====================== // ======================= // ===============

const arr1 = [{"user": "Layla", "sex": "male"}, {"user": "Kappa"}, {"user": "Himiko", "sex": "female"}, {"user": "Sassy", "sex": "female"}];


const truthCheck = ( collection, pre ) => {
   for (let i = 0; i < collection.length; i++) {
      if ( !collection[i][`${pre}`] ) {
         pre = false
         return pre
      }
   }
   pre = true;
   return pre;
}

// ======================== // ================================ //
/*
suma fibonacci
*/

// function sumFibs(num) {
//    let sum = 0;
//    const array = [1,1];
//    const array2 = [];
//    for (let i = 1; i < num; i++) {
//       array.push( array[ i - 1 ] + array[i]  )
//    }
   
//    for (let x = 0; x < num; x++) {
//       if ( array[x] % 2 === 1  ) {
//          array2.push( array[x] )
//       }
//    }
   
//    for (let w = 0; w < array2.length; w++) {
//       sum += array2[w];
//       if (sum >= num) {
//          return sum
//       }   
//    }
// }

// console.log( sumFibs(4000000) );

// ======================= // =============================== // =======================

// const arr = [1, 2, 3, 1, 2, 3];
/*
  Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

*/

// function destroyer(arr) {
//    const deleteNum = ( elem ) => {
//       for (let x = 0; x <= arr.length; x++) {
//          if ( arr[x] === elem ) {
//             arr.splice(x,1)
//          }
//          if (arr.length === 1) {
//             arr.splice(0,1)
//             arr[0] = 0
//          }
//       }
//    }
//    for (let i = 1; i < arguments.length; i++) {
//       const element = arguments[i];
//       deleteNum( element );
//    }
//    return arr;
// }

// console.log( destroyer(arr3,2,3 ) );

// =================== // ==================== // ===================================== //

/*
 closure
*/

// function addTogether() {
//    let sum = 0;
//    const sumTwoAnd = arguments[0];
//    for (let z = 0; z < arguments.length; z++) {
//       const element = arguments[z];
//       console.log( element );
//       if (arguments.length === 1 ) {
//          return (b) => {
//             console.log(b);
//             return b + element;
//          }
//       }else {
//          sum += element;
//       }
      
//    }
//    return sum ;
// }
// const sum = addTogether(5);
// console.log( sum(10,5) );

// ================== //  ============================ // ==========

/*
  Latin de los cerdos 
*/

// function translatePigLatin(str) {
//    const add = ['a','y'];
//    const addVocal = [ 'w', 'a', 'y' ];
//    const arr = [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ];
//    const lyrics = [];
//    const lyrics2 = [];
//    const allConso = [];
//    let flag = false;
//    let lyricsRemove = [];
//    for (let w = 0; w < str.length; w++) {
//       const element = str[w];
//       lyrics.push( element );
//    }
//    for (let i = 0; i < lyrics.length + 1; i++) {
//       const element = str[i];
//       flag = false
//       for (let h = 0; h <= (arr.length); h++) {
//          const lyricsCons = arr[h];
//          if ( element === lyricsCons ) {
//             lyricsRemove.push(element) 
//             lyrics.splice(h,1)
//             flag = true
//             h = arr.length
//          }
//       }
//       if (flag === true) {
//          allConso.push(element);
//          if ( i === (lyrics.length )) {
//             str = '';
//             for (let w = 0; w < add.length; w++) {
//                allConso.push(add[w])
//             }
//             for (let r = 0; r < allConso.length; r++) {
//                const element = allConso[r];
//                str += element
//             }
//             return str
//          }
//       }
//       if (flag === false) {
//          i = lyrics.length;
//       }
//    }
//    for (let w = 0; w < str.length; w++) {
//       const element = str[w];
//       lyrics2.push( element );
//    }
//    for (let o = 0; o < lyricsRemove.length; o++) {
//       lyrics2.splice(0,1)
//       lyrics2.push(lyricsRemove[o])
//    }
//    for (let f = 0; f < add.length; f++) {
//       if ( lyricsRemove.length > 0 ) {
//          lyrics2.push(add[f])
//       }
//       if ( f === add.length -1 && lyricsRemove.length > 0  ) {
//          str = '';
//          for (let q = 0; q < lyrics2.length; q++) {
//             const element = lyrics2[q];
//             str += element
//          }
//          return str
//       }
//    }
//    for (let n = 0; n < addVocal.length; n++) {
//       if ( lyricsRemove.length === 0 ) {
//          lyrics2.push(addVocal[n]);
//       }
//       if (n === addVocal.length - 1) {
//          str = ''
//          for (let q = 0; q < lyrics2.length; q++) {
//             const element = lyrics2[q];
//             str += element
//          }
//          return str
//       }  
//    }
// }

// console.log( translatePigLatin( "algorithm" ) );


// =========== // ================ // ================== 

/*
 condicional variable
*/

//function dropElements(arr, func) {
//    const cicle = arr.length
//    for (let i = 0; i < cicle; i++) {
//       const element = arr[0];
//       let flag = func(element)
//       if (flag === true) {
//          return arr
//       }else {
//          arr.splice(0,1)
//       }
//    }
//    return arr;
// }
// const arr = [1, 2, 3, 4];

// const numSame = (num) => {
//    return num > 5;
// }

// console.log( dropElements( arr, numSame ) );


// ========================= // ================================ // ==========================//

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
   const copy = ar;
   let pairs = 0;
   for (let i = 0; i < n; i++) {
      const element = ar[i];
      for (let x = 1; x < n; x++) {
         const element2 = ar[x];
         if (Element === element2) {
            copy.splice(i,1)
            copy.splice( x,1 )
            pairs += 1;
         }
      }
   }
   return pairs;
}

// console.log( sockMerchant( arr.length, arr ) );

// ================ // ========================== //
/*
   unidos pero unicos 
*/
function uniteUnique(arr) {
   let flag = false;
   const arrNums = [];
   for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      for (let x = 0; x < element.length; x++) {
         const element2 = element[x];
         if (i === 0) {
            arrNums.push( element2 );
         }
         if (i > 0) {
            for (let w = 0; w < arrNums.length; w++) {
               if (element2 === arrNums[w]) {
                  flag = true
                  w = arrNums.length;
               }
            }
            if ( flag === false ) {
               arrNums.push( element2 )
            }
            flag = false;
         }
      }
   }

  return arrNums;
}
// console.log( uniteUnique() );


// ==================================== // ================================== //

const sentence = "I think we should look up there";
const change = "up";
const changeSente = "Down";

function myReplace(str, before, after) {
   let flag = false;
   const arrMay = ['A','B','C','D','E','F','G','H','I','J','K','M','N','Ñ','L','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   const arrMin = ['a','b','c','d','e','f','g','h','i','j','k','m','n','ñ','l','o','p','q','r','s','t','u','v','w','x','y','z'];
   const changeMayus = [];
   for (let t = 0; t < after.length; t++) {
      const element = after[t];
      changeMayus.push(element)
   }
   for (let l = 0; l < arrMin.length; l++) {
      const element = arrMay[l];
      const elem = arrMin[l]
      if ( before[0] === element ) {
         for (let ñ = 0; ñ < arrMay.length; ñ++) {
            const element2 = arrMin[ñ];
            if ( after[0] === element2 ) {
               changeMayus.splice(0,1,arrMay[ñ])
               flag = true
               ñ = arrMay.length;
               l = arrMin.length;
            }
         }
      }
      if (before[0] === elem) {
         for (let ñ = 0; ñ < arrMay.length; ñ++) {
            const element2 = arrMay[ñ];
            if ( after[0] === element2 ) {
               changeMayus.splice(0,1,arrMin[ñ])
               flag = true
               ñ = arrMay.length;
               l = arrMin.length;
            }
         }
      }
   }
   if (flag ) {
      after = '';
      for (let b = 0; b < changeMayus.length; b++) {
         const element = changeMayus[b];
         after += element;
      }
   }
   console.log(after);
   const arr = [];
   let position = str.search( `${before}` )
   let replase = after.length;
   let num = 0;
   let beforeNum = before.length;
   
   for (let w = 0; w < str.length; w++) {
      const element = str[w];
      arr.push(element)
   }
   
   for (let x = position ; x < (position + beforeNum ) ; x++) {
      arr.splice(position,1)
   }
   for (let w = position; w < position + (replase); w++) {
      arr.splice(w,0,after[num])
      num += 1;
   }
   str = '';
   for (let q = 0; q < arr.length; q++) {
      const element = arr[q];
      str += element
   }
  return str;
}  
// console.log( myReplace( sentence, change, changeSente ) );


// ====================== // =========================// ==========================//

function smallestCommons(arr) {
   let flag = true;
   const arr2 = [];
   let mayo = 0;
   let men = 0;
   if (arr[0] > arr[1]) {
      mayo = arr[0]
      men = arr[1]
   }else {
      mayo = arr[1]
      men = arr[0]
   }
   let cont = mayo
   for (let w = men; w < mayo +1; w++) {
      arr2.push(w)
   }
   for (let x = mayo; x < cont + 2; x++) {
      cont += 1;
      const element1 = x;
      for (let q = 0; q < arr2.length; q++) {
         const element = arr2[q];
         if ( (element1 / element) % 2 === 0 || (element1 / element) % 2 === 1 ) {
            flag = true;
         } else {
            flag = false;
            q = arr2.length;
         }
      }
      if (flag === true) {
         return element1
      }
      flag = true
   }
}

// console.log( smallestCommons([1,5]) );

// =========================================== // ============================================== //


/*
  primos 
*/

function primes(n) {
   let flag = false;
   const arr = [];
   for (let i = 2; i < n; i++) {
      function primo(numero) {
         for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
               return false;
            }
         }
         return true
      }
      flag = primo(i)
      if (flag) {
         arr.push( i )
      }
      flag = false;
   }
 return arr
}

// console.log( primes( 10 ) );


// =================== // ============================ // 

/*
  Buscador
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.

*/

const collection = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }];
const source = { "apple": 1, "cookie": 2 };

function searcher(collection, source) {
   
   var arr = [];
   let cont = 0;
   let keys = []
   let value = []
   for (const proprty in source) {
      keys.push( `${proprty}` )
      value.push( `${source[proprty]}` )
   }
   const aux = keys.length;
   for (let i = 0; i < collection.length; i++) {
      for (const key in collection[i]) {
         const keyC = `${key}`
         const valueC = `${collection[i][key]}`
         for (let x = 0; x < keys.length; x++) {
            if ( keyC === keys[x] && valueC === value[x] ) {
               cont += 1
            }
         }         
      }
      if (cont === aux) {
         arr.push( collection[i] )
      }
      cont = 0;
   }
   return arr;
}

// console.log( searcher( collection, source ) );



// =======================  // ================================ // ========= //

/*
 the spinal case 
*/

function spinalCase(str) {

   const arr = [];
   let cont = 0;
   const arrMay = ['A','B','C','D','E','F','G','H','I','J','K','M','N','L','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   const arrMin = ['a','b','c','d','e','f','g','h','i','j','k','m','n','l','o','p','q','r','s','t','u','v','w','x','y','z'];

   for (let i = 0; i < str.length; i++) {
      const element = str[i];
      arr.push( element )
   }
   const arrCopy = [...arr]
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      for (let x = 0; x < arrMay.length; x++) {
         const element2 = arrMay[x];
         if (i > 0 && element === element2) {
            for (let w = 0; w < arr.length; w++) {
               const element3 = arrMay[w];
               if ( arr[i - 1] === element3   ) {
                     arrCopy.splice(i+cont, 0, '-')
                     cont += 1
               }
            }
            for (let q = 0; q < arrMin.length; q++) {
               const element6 = arrMin[q];
               if ( arr[ i - 1 ] === element6  ) {
                  arrCopy.splice(i+cont, 0, '-')
                  cont += 1
               }
            }
         }
      }
   }

   for (let i = 0; i < arrCopy.length; i++) {
      const element = arrCopy[i];
      for (let x = 0; x < arrMay.length; x++) {
         const element2 = arrMay[x];
         if ( element === element2 ) {
            arrCopy[i] = arrMin[x]
         }
         if (element === '_') {
            arrCopy[i] = '-'
         }
         if ( element === ' ' ) {
            arrCopy[i] = '-'
         }
      }
   }
   str = ''
   for (let i = 0; i < arrCopy.length; i++) {
      const element = arrCopy[i];
      str += element;
   }

  return str;

}

// This Is Spinal Case
// "TheLess_iKnow-the Better"
// "ThisIsSpinalCase"
// console.log( spinalCase( "TheLess_iKnow-the Better" ) );


// ==================================== // ================================= //


/*
  Task Description: Tips & Tricks
*/

function fearNotLetter(str) {
   
   let flag = null;
   const arrMin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   let position = 0;
   const lengthStri = str.length
   let cont = 0;

   for (let i = 0; i < arrMin.length; i++) {
      const element = arrMin[i];
      if ( str[0] === element ) {
         position = i;
         i = arrMin.length
      }
   }
   for (let i = position; i < position + lengthStri + 1; i++) {
      const element = arrMin[i];
      const element1 = str[cont]

      if ( element === element1 ) {
         flag = true
      }else {
         return element
      }
      cont ++
   }
   return undefined
}

// console.log( fearNotLetter( "stvwx" ) );
