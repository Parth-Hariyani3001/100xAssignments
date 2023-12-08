/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let a = str.toLowerCase();
  for (let i = 0; i < a.length; i++) {
    if (vowels.includes(a[i])) {
      count++;
    }
  }
  return count == 0 ? 0 : count;
}
// console.log(countVowels('aeiou'))

module.exports = countVowels;