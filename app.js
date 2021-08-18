// Quick Question #1
console.log(new Set([1, 1, 2, 2, 3, 4])); // [1, 2, 3 , 4]

// Quick Question #2
const what = [...new Set("referee")].join("");
console.log(what); // ref

// Quick Question #3
let m = new Map();
console.log(m.set([1, 2, 3], true)); //{Array(3) => true}
console.log(m.set([1, 2, 3], false)); //{Array(3) => true, Array(3) => false}

const hasDuplicate = (arr) => {
	const emptyArray = [];
	for (let el of arr) {
		if (emptyArray.includes(el)) {
			return true;
		} else {
			emptyArray.push(el);
		}
	}
	return false;
};
console.log(hasDuplicate([1, 3, 2, 1]));
console.log(hasDuplicate([1, 5, -1, 4]));

const vowelCount = (inputString) => {
	const myMap = new Map();
	const vowels = "aeiou";
	for (let value of inputString) {
		const lowerCasedValue = value.toLowerCase();
		if (vowels.includes(lowerCasedValue)) {
			if (myMap.has(lowerCasedValue)) {
				myMap.set(lowerCasedValue, myMap.get(lowerCasedValue) + 1);
			} else {
				myMap.set(lowerCasedValue, 1);
			}
		}
	}
	return myMap;
};

console.log(vowelCount("awesome"));
console.log(vowelCount("colt"));
