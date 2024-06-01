//This is TRAIN ARIA
console.log('TRAIN ARIA:');

//ZT-TASK

function firstUniqueCharIndex(str) {
  for(let i = 0; i < str.length; i++) {
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
          return i;
      }
  }
}
console.log(firstUniqueCharIndex('stamp'));
