function addTogether() {
    let sum = 0;
    for (let z = 0; z < arguments.length; z++) {
        const element = arguments[z];
        if (arguments.length === 1) {
            return (b) => {
                return b + element
            }
        }else {
            sum += element
        }

    }
    return sum ;
}

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

function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if ( !collection[i][`${pre}`] ) {
            pre = false
            return pre
        }
    }
    pre = true;
    return pre;
}

function pairElement(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if( str[i] === 'A' ){
            arr.push( [str[i], 'T'] );
        }
        if( str[i] === 'T' ){
            arr.push( [str[i], 'A'] );
        }
        if( str[i] === 'G' ){
            arr.push( [str[i], 'C'] );
        }
        if( str[i] === 'C' ){
            arr.push( [str[i], 'G'] );
        }
    }
    return arr
}

function destroyer(arr) {

    const deleteNum = ( elem ) => {
        for (let x = 0; x <= arr.length; x++) {
            if ( arr[x] === elem ) {
                arr.splice(x,1)
            }
            if (arr.length === 1) {
                arr.splice(0,1)
                return 0
            }
        }
    }
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i];
        deleteNum( element );
    }
    return arr;
}

function sumFibs(num) {
    let sum = 0;
    const array = [1,1];
    const array2 = [];
    for (let i = 1; i < num; i++) {
        array.push( array[ i - 1 ] + array[i]  )
    }

    for (let x = 0; x < num; x++) {
        if ( array[x] % 2 === 1  ) {
            array2.push( array[x] )
        }
    }

    for (let w = 0; w < array2.length; w++) {
        sum += array2[w];
        if (sum >= num) {
            return sum
        }
    }
}


function translatePigLatin(str) {
  const add = ['a','y'];
  const addVocal = [ 'w', 'a', 'y' ];
  const arr = [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ];
  const lyrics = [];
  const lyrics2 = [];
  const allConso = [];
  let flag = false;
  let lyricsRemove = [];

  for (let w = 0; w < str.length; w++) {
    const element = str[w];
    lyrics.push( element );
  }
  for (let i = 0; i < lyrics.length + 1; i++) {
    const element = str[i];
    flag = false
    for (let h = 0; h <= (arr.length); h++) {
      const lyricsCons = arr[h];
      if ( element === lyricsCons ) {
        lyricsRemove.push(element)
        lyrics.splice(h,1)
        flag = true
        h = arr.length
      }
    }
    if (flag === true) {
      allConso.push(element);
      if ( i === (lyrics.length )) {
        str = '';
        for (let w = 0; w < add.length; w++) {
          allConso.push(add[w])
        }
        for (let r = 0; r < allConso.length; r++) {
          const element = allConso[r];
          str += element
        }
        return str
      }
    }
    if (flag === false) {
      i = lyrics.length;
    }
  }
  for (let w = 0; w < str.length; w++) {
    const element = str[w];
    lyrics2.push( element );
  }
  for (let o = 0; o < lyricsRemove.length; o++) {
    lyrics2.splice(0,1)
    lyrics2.push(lyricsRemove[o])
  }

  for (let f = 0; f < add.length; f++) {
    if ( lyricsRemove.length > 0 ) {
      lyrics2.push(add[f])
    }
    if ( f === add.length -1 && lyricsRemove.length > 0  ) {
      str = '';
      for (let q = 0; q < lyrics2.length; q++) {
        const element = lyrics2[q];
        str += element
      }
      return str
    }
  }
  for (let n = 0; n < addVocal.length; n++) {
    if ( lyricsRemove.length === 0 ) {
      lyrics2.push(addVocal[n]);
    }
    if (n === addVocal.length - 1) {
      str = ''
      for (let q = 0; q < lyrics2.length; q++) {
        const element = lyrics2[q];
        str += element
      }
      return str
    }
  }
}


function dropElements(arr, func) {
  const cicle = arr.length
  for (let i = 0; i < cicle; i++) {
    const element = arr[0];
    let flag = func(element)
    if (flag === true) {
      return arr
    }else {
      arr.splice(0,1)
    }
  }
  return arr;
}

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

function fearNotLetter(str) {

  const arrMin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let position = 0;
  let cont = 0;
  let flag = null;
  const lengthStri = str.length

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
      flag = true;
    }else {
      return element;
    }
    cont ++
  }
  return undefined
}


function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let newArr = [];

  let getOrbPeriod = function(obj) {
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c / GM);
    let orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}