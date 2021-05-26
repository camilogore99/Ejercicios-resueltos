/*
  Mini-Max Sum https://www.hackerrank.com/challenges/mini-max-sum/problem
*/
const miniMaxSum = (arr) => {
      arr.sort()
      let cont = 0,
          cont2 = 0; 
      for (let i = 0; i < arr.length; i++ ){
            if (i > 0){
                  cont += arr[i]
            }
            if (i < (arr.length - 1)) {
                  cont2 += arr[i]
            }
      }
      console.log( cont2,cont )
}

// miniMaxSum([ 7, 69, 2, 221, 8974 ]);

/*
Otra solucion para el problema 

function miniMaxSum(arr) {
    arr.sort();
    var  minSum  =  arr [ 0 ]  +  arr [ 1 ]  +  arr [ 2 ]  +  arr [ 3 ]; 
    var  maxSum  =  arr [ 1 ]  +  arr [ 2 ]  +  arr [ 3 ]  +  arr [ 4 ];
    console.log( minSum ,  maxSum ); 
}
*/

// ================================ // ===================================== //

/*
https://www.hackerrank.com/challenges/grading/problem
*/

const grades = [28,50,38,58,78,40,73,44];
//             [28,50,40,60,80,40,75] 


const gradingStudents = (grades) => {
      const a = 2;
      // calificacion es de 0-100 
      // la califiacion menor de 40 es reprovatoria
      for (let i = 0; i < grades.length; i++) {
            if ( grades[i] >= 38 && grades[i] < 100 ) {
                  if (grades[i] % 5 === 3) {
                        grades[i] += 2
                  }else if (grades[i] % 5 === 4) {
                        grades[i] += 1
                  }else if (grades[i] % 10 === 4) {
                        grades[i] += 1
                  }else if (grades[i] % 10 === 3) {
                        grades[i] += 2
                  }
            }
      }
      return grades 
}

// console.log( gradingStudents( grades ) );


//  ====================== //  ==================================  //

//      Manzanas      y       Naranjas       //

const apples = [ 2, 3, -4 ];
const oranges = [ 3, -2, -4 ];

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
      let contApples = 0;
      let contOranges = 0;
      for (let i = 0; i < apples.length; i++) {
            apples[i] += a;
            if ( apples[i] >= s && apples[i] <= t ) {
                  contApples += 1;
            }
      }
      for (let i = 0; i < oranges.length; i++) {
            oranges[i] += b;
            if ( oranges[i] >= s && oranges[i] <= t ) {
                  contOranges += 1;
            }
      }
      console.log(contApples);
      console.log(contOranges);  
}

// console.log( countApplesAndOranges( 7, 10, 4, 12, apples, oranges ) );


//  ====================== // ========================= // ======================  //

/*
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign&isFullScreen=true
*/
const score = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ];

const breakingRecords = ( scores ) => {
      let recordMay = scores[0];
      let recordMen = scores[0];
      const arrayScore = [];
      let contMay = 0;
      let contMen = 0;
      for (let i  = 0; i <= scores.length; i++) {
            if ( scores[i] > recordMay ) {
                  contMay += 1;
                  recordMay = scores[i];
            }
            if ( scores[i] < recordMen ) {
                  contMen += 1;
                  recordMen = scores[i];
            }
      }
      arrayScore.push( contMay, contMen );

      console.log(` Muy bien subiste tu record ${contMay}`);
      console.log(`debes mejorar mas, bajaste ${contMen} veces tu puntuacion maxima `);
      return arrayScore
}
// console.log( breakingRecords( score ) );

// =========================== //  =============================== // ===================

/*
  https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true 
*/

const prueba = [ 1, 2, 1, 3, 2 ];

const birthday = ( s, d, m ) => {
      let arr = [];
      let cont = 0;
      let ayuda = 0;
      let trosos = 0;
      let conAx = m;
      for (let i = 0; i < m; i++) {
            arr[i] = cont;
            cont += 1;
      }
      for (let i = 0; i < s.length; i++) {
            for (let x = i; x < conAx ; x++) {
                  ayuda += s[x]
            }
            if (ayuda === d ) {
                  trosos += 1;
            }
            conAx += 1;
            ayuda = 0;
      }
      return trosos
}
// console.log( birthday( prueba, 3, 2 ) );

// =============================== //  ======================= //   ================== // 

/*
  https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
*/

const arr = [1, 3, 2, 6, 1, 2];

const divisibleSumPairs = (n, k, ar) => {
      const arr = [];
      let cont = 0;
      let sum = 0;
      for (let i = 1; i < n*10; i++) {
            if ( ( i / k ) % 2 === 0 || ( i / k ) % 2 === 1 ) {
                  arr.push( i );
            }
      }
      console.log(arr);
      for (let i = 0; i < ar.length; i++) {
         for (let x = i+1; x < ar.length; x++) {
            sum =ar[ i ] + ar[ x ];
            for (let h = 0; h < arr.length; h++) {
               if ( sum === arr[ h ] ) {
                  cont += 1;
               }
            }
         }
      }
      return( cont );
}
// console.log( divisibleSumPairs( 6, 3, arr ) );

// ====================================== // ======================================= // 

/*
  https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
*/

const arrp = [ 1, 4, 4, 4, 5, 3 ];
const migratoryBirds = ( arr ) => {
   let cont = 0;
   let win = 0;
   let position = 0;
   const array2 = [];
   for (let i = 1; i < 6; i++) {
      for (let x = 0; x < arr.length; x++) {
         if ( arr[x] === i ) {
            cont += 1;
         }
      }
      array2.push( cont );
      cont = 0;
   }
   let contMay = array2[0];
   for (let h = 0; h < array2.length; h++) {
      if (array2[h] > contMay ) {
         contMay = array2[h];
         position = h + 1;
      }
   }
   for (let w = 0; w < array2.length; w++) {
      if ( array2[w] === contMay ) {
         return win = w + 1;
      }
   }
   return( win );
}
// console.log( migratoryBirds( arrp ));

// ====================================================== // ==============================//
/*
  https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
*/

// K es la posicion de lo que no se comio ana 
// b es la cantidad de dinero que brian le pidio a ana 

// const bill = [ 3, 10, 2, 9 ];
// const k = bill[1];
// const b = 12;


// const bonAppetit = ( bill, k, b ) => {
//    k = bill[];
// }

// console.log( bonAppetit( bill, k, b ) );

// ========================= // ======================= // ============= 


/*
  https://www.hackerrank.com/challenges/sock-merchant/problem
*/

function sockMerchant(n, ar) {
   let flag =false;
   let cont = 0;
   const copy = ar;
   let pairs = 0;
   for (let i = 0; i < n; i++) {
      const element = copy[cont];
      for (let x = cont + 1 ; x < copy.length; x++) {
         const element2 = copy[x];
         if (element === element2) {
            flag = true;
            copy.splice(cont,1)
            copy.splice( x-1,1 )
            x = n
         }
      }
      if ( flag === true ) {
         pairs += 1;
      }
      if (flag === false) {
         cont += 1;
      }
      flag = false;
   }
   return pairs;
}

// console.log( sockMerchant( arr.length, arr ) );

// ================================== // ==============================//
/*
  https://www.hackerrank.com/challenges/camelcase/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign&isFullScreen=true
*/

function camelcase(s) {
   const arrMay = ['A','B','C','D','E','F','G','H','I','J','K','M','N','L','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   let cont = 1;
   // Write your code here
   for (let i = 1; i < s.length; i++) {
      console.log(s.length);
      const element = s[i];
      for (let x = 0; x < arrMay.length; x++) {
         const ma = arrMay[x];
         if (element === ma ) {
            cont += 1;
         }
      }
   }
   return cont
}

// console.log( camelcase( 'saveChangesInTheEditor' ) );

// =============================== // ============================ //

/*
  https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
*/

const s = 'SOS OOS OSO SOS OSS OSO SOS OSO SOS';

const s2 = 'OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS'

function marsExploration(s) {
   let cont1 = 0;
   let cont2 = 1;
   let cont3 = 2;
   let cont = 0;
   let totalSos = 0;
   const arr = ['S','O','S'];
   const arr2 = [];
   
   for (let i = 0; i < (s.length / 3); i++) {
      arr2.push( [ s[cont1], s[cont2], s[cont3] ]  )
      cont1 += 3;
      cont2 += 3;
      cont3 += 3;
   }
   for (let w = 0; w < arr2.length; w++) {
      
      for (let y = 0; y < arr.length; y++) {
         if (arr2[w][y] === arr[y]) {
         }else {
            totalSos += 1;
         }
      }
   }
   
   return totalSos;
}

// console.log( marsExploration( s2 ) );

// ======================== // ==================================== //

/*
  https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
*/

function pageCount(n, p) {
   const arr = [[1]]
   let cont1 = 2;
   let cont2 = 3;

   for (let i = 2; i < n; i++) {

      if (arr.length === n || cont1 === n || cont2 === n) {
         i = n
      }
      arr.push([ cont1, cont2 ])
      cont1 += 2;
      cont2 += 2;
   }

   let beginning = 0;

   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      for (let x = 0; x < element.length; x++) {
         const element2 = element[x];
         if (element2 === p) {
            beginning = i;
         }
      }
   }

   let last = 0;
   let cont = 0;

   for (let i = arr.length - 1 ; i > 0; i--) {
      const element = arr[i];
      for (let x = 0; x < element.length; x++) {
         const element2 = element[x];
         if ( element2 === p ) {
            last = cont  
         }
      }
      cont ++
   }

   if (last < beginning) {
      return last 
   }else {
      return beginning
   }
}

// console.log( pageCount(6,2) );




