let string = 'aba'
let num = 10

function repeatedString(s, n) {
  const aCount = (string) => string.split('')
    .filter(char => char === 'a')
    .length 
  let subLength = s.length
  let substringCount = Math.floor(+n/subLength)
  let lastSubstring = s.slice(0, +n % subLength)
  return substringCount * aCount(s) + aCount(lastSubstring)
}

console.log(repeatedString(string,num))