function range(start,end){
  let retRange = [];
  for(let i = start; i<=end; i++){
      retRange.push(i)
  }
  return retRange
}
function findFirstLetterIndex(string){
 return string.split('').findIndex(element => isNaN(element) )
}
function classify(char){
  if(!isNaN(char)){
      return 'num'
  } else if ( char.replace(/[A-Z]/,'').length !== char.length){
      return 'up'
  } else if ( char.replace(/[a-z]/,'').length !== char.length ){
      return 'low'
  } else return 'special'
}
function replaceLastZero(string,digit){
 return string.split('')
  .reverse()
  .join('')
  .replace('0',digit)
  .split('')
  .reverse()
  .join('');
}
function swap(index1,index2,string) {
  let stringSplit = string.split('');
  let char1 = stringSplit[index1];
  let char2 = stringSplit[index2];
  stringSplit[index1] = char2;
  stringSplit[index2] = char1;
  return stringSplit.join('');
}


function decryptPassword(string) {
  let firstLetterIndex = findFirstLetterIndex(string); // change to const
  let digits = string.slice(0,firstLetterIndex)
  let letters = string.slice(firstLetterIndex, string.length)
  digits.split('').forEach((dig)=>{
      letters = replaceLastZero(letters,dig);
  })

  for(let i = 0; i<letters.length; i++){
      let curLet = letters.charAt(i);
      let nextLet = letters.charAt(i + 1);
      let nextNextLet = letters.charAt(i + 1)
      if(
          classify(curLet) === 'up' 
          && classify(nextLet) === 'low'
          && classify(nextNextLet) === 'special'
      ){
          letters = swap( i , i + 1, letters);
          i += 2
      }
  }

  console.log(letters.replace(/\*/g,''))
}

let string = '43Ah*ck0rr0nk'
decryptPassword(string)