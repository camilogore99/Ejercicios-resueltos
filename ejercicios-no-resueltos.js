// ================================= //  ============================= //

/*
  https://www.hackerrank.com/challenges/between-two-sets/problem
*/

//       ejercicio de hackerRank no resuelto         //
const a = [ 2, 6 ];
const b = [ 24, 36 ];

const getTotalX = (a, b) => {
      let x = 0;
      let xs = 0;
      const ar = [];
      for (let x = 0; x < b.length; x++) {
            for (let i = 2; i <= b[x]; i++) {
                  xs = b[x] / i;
                  if ( xs % 2 === 0  ) {
                        ar.push( xs )
                  }
            }
      }
      console.log( ar );
}
// console.log( getTotalX( a, b ) );

// ===================== // =============== //  ================ //  ======================= //

/*
  https://www.hackerrank.com/challenges/kangaroo/problem
*/

const kangaroo = (x1, v1, x2, v2) => {
      if ( x1 % 2 === 0 && x2 % 2 === 0 || x1 % 2 === 1 && x2 % 2 === 1  ) {
            if ( v1 % 2 === 1 && v2 % 2 === 0 || v1 % 2 === 0 && v2 % 2 === 0  ) {
                  return ( 'YES' );
            }else{
                  return ( 'NO' );
            }
      }else {
            return ( 'NO' );
      }

}
// console.log( kangaroo( 28, 8, 96, 2 ) );