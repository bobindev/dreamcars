//This is TRAIN ARIA
console.log("TRAIN ARIA");

//ZJ-TASK

function reduceNestedArray(array: any[]) {
  const flattened = array.flat(2);   
return flattened.reduce((a, b) => a + b);   
}
console.log(reduceNestedArray([1, [1, 2, [4]]]));