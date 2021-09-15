/* MAPS AND SETS EXERCISE */

// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);
// [1,2,3,4]

//What does the following code return?

console.log([...new Set("referee")].join(""));
// "ref" because it will not allow for repeats; each character must be unique

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//Map(2) {Array(3) => true, Array(3) => false}

/* hasDuplicate */
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

/* hasDuplicate */
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowels = ["a", "e", "i", "o", "u"];

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let count = 0;
    let lowerCase = char.toLowerCase();
    if (vowelMap.includes(lowerCase)) {
      vowelMap.set(lowerCase, vowelMap.get(lowerCase + 1));
    } else {
      vowelMap.set(lowerCase, 1);
    }
  }
  return vowelMap;
}

// function vowelCount(str) {
//   let count = 0;
//   const vowelMap = new Map();
//   for (let char of str) {
//     if (vowelFound) {
//       if (vowelMap.has(char)) {
//         vowelMap.set(count++);
//       } else {
//         vowelMap.set(count === 1);
//       }
//     }
//   }
//   return vowelMap;
// }

// function isVowel(char) {
//   return "aeiou".includes(char);
// }

// function vowelCount(str) {
//   const vowelMap = new Map();
//   for (let char of str) {
//     let lowerCaseChar = char.toLowerCase();
//     if (isVowel(lowerCaseChar)) {
//       if (vowelMap.has(lowerCaseChar)) {
//         vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//       } else {
//         vowelMap.set(lowerCaseChar, 1);
//       }
//     }
//   }
//   return vowelMap;
// }
