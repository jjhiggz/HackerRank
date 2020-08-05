// let sample  = [
// [-1,-1,0,-9,-2,-2],
// [-2,-1,-6,-8,-2,-5],
// [-1,-1,-1,-2,-3,-4],
// [-1,-9,-2,-4,-4,-5],
// [-7,-3,-3,-2,-9,-9],
// [-1,-3,-1,-2,-4,-5],
// ]
sample = (
'3 7 -3 0 1 8 ' + 
'1 -4 -7 -8 -6 5 ' + 
'-8 1 3 3 5 7 '+ 
'-2 4 3 1 2 7 '+
'2 4 -5 1 8 4 ' +
'5 -7 6 5 2 8'
).split(' ')
  .map(numString => parseInt(numString))

const flatten = (array) => {
  let flatArray = []
  array.forEach(el => {
    el.forEach(subEl => {
      flatArray.push(subEl)
    })
  })
  return flatArray
} 

function hourglassSum(arr) {
  // const flat = flatten(arr)
  const flat = arr
  const hourglassPositions = (p) => [p-1,p,p+1,p+6,p+11,p+12,p+13,]
  let sum = null;
  for(let i = 1; i < flat.length; i++){
        let testSum = hourglassPositions(i)
          .map((pos) => flat[pos])
          .reduce((acc,el) => acc + el )
          console.log(testSum,i)
        if( testSum > sum || sum === null){
          sum = testSum
        }
  }
  console.log(sum)
}


hourglassSum(sample)


// this currently solves all but one case and I know why, but I would likely have to refactor the whole problem

// to explain, the way that I coded this originally was to not even consider terms where the hourglass shape cannot be indexed from the array. For example on the edge of the array, since you can't index outside of the matrix, then ignore that case. Unfortunately, I think that the way the problem is written it wants you to if you can't index those, then their value should default to 0.

// As a result, it would be much easier to program that logic if I never flattened the array at all, and instead used nested for loops.

// I really just want to work on something new right now so I am not going to do that.
