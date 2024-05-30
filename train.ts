//This is TRAIN ARIA
console.log('TRAIN ARIA:');

//ZS-TASK

function singleNumber(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}

console.log(singleNumber([4, 2, 1, 2, 1]));
