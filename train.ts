//This is TRAIN ARIA
console.log('TRAIN ARIA:');

//ZL -TASK


function rotateArray(arr: string | any[], index: number) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (i <= index) {
          newArr.push(arr[i]);
      } else if (i > index) {
          newArr.unshift(arr[i]);
      }
  } return newArr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3) );