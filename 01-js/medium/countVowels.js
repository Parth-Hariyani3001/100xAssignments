/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    let a = str.toLowerCase().split();
    for(let i = 0; i < a.length; i++ ){
      for(let j = 0; j < vowels.length; j++){
        if(a[i] === vowels[j]){
          count++;
        }
      }
    }
    return count === 0 ? 0 : count;
}

module.exports = countVowels;