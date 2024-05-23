//This is TRAIN ARIA
console.log('TRAIN ARIA:');

//ZP-TASK

function majorityElement(arr) {
  let mf = 1;
  let m = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++;
        if (m > mf) {
          mf = m;
          item = arr[i];
        }
      }
    }
    m = 0;
  }

  return item;
}

console.log( majorityElement([1,2,3,4,5,4,3,4]))
