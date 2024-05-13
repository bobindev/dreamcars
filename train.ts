//This is TRAIN ARIA
console.log("TRAIN ARIA");

//ZI-TASK

function stringToKebab(string: string) {
  let lowerCase = string.toLowerCase();
  let stringKebab = lowerCase.replace(/\s+/g, "-");
  return stringKebab;
}

console.log(stringToKebab("I love Kebab"));