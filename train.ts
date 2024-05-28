//This is TRAIN ARIA
console.log('TRAIN ARIA:');

//ZR-TASK

function countNumberAndLetters(str) {
	let count = {
		number: 0,
		letter: 0,
	};
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= 0 && str[i] <= 9) {
			count.number++;
		} else if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
			count.letter++;
		}
	}
	return count;
}
console.log(countNumberAndLetters('string152%¥'));
