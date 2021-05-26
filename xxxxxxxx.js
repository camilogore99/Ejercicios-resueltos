

const arr = ['U','D','D','D','U','D','U','U'];

const arr2 =['D','D','U','U','D','D','U','D','U','U','U','D'];

const arr3 = ['D','D','U','D','D','U','U','D','U','U'];

const arr4 = ['D','U','D','U','U','U','U','U','U','U','U','D','U','D','D','U','U','D','U','U','D','D','D','U','U','D','D','D','D','D','U','U','D','U','U','U','U','D','D','D','U','U','U','U','U','U','U','D','D','U','D','U','D','U','U','U','D','D','D','D','U','U','D','D','D','U','D','D','D','D','U','U','D','D','U','D','D','U','U','U','D','U','U','U','D','U','U','D','U','D','U','D','D','D','D','D','D','D','D','D'];


function countingValleys(steps, path) {

   const arr = [];
   let mar = 0;
   let valle = 0;

   for (let i = 0; i < path.length; i++) {
      const element = path[i];
      if ( element === 'D'  ) {
         arr.push( -1 )
      }else {
         arr.push(1)
      }
   }
   
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      mar += element;
      if (mar <= -2 && arr[i-1] === -1 && arr[i] === -1) {
         valle += 1;
      }
   }

   return valle
}

console.log( countingValleys( 8, arr4 ) );