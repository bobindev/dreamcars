//This is TRAIN ARIA
console.log("TRAIN ARIA");

//ZJ-TASK

function printNumbers() {
  let count = 1;

  const interval = setInterval(() => {
      console.log(count);
      count++;

      if (count > 5) {
          clearInterval(interval);
      }
  }, 1000);
}

printNumbers();