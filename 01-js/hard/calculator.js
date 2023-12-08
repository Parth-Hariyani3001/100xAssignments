/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result) {
    this.result = result;
  }

  add(num) {
    this.result + num;
  }

  subtract(num) {
    this.result - num;
  }

  multiply(num) {
    this.result * num;
  }

  divide(num) {
    this.result / num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result
  }

  calculate(str) {
    let expression = str
    expression = expression.replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    expression = expression.replace(/[a-zA-Z]/g, "");

    try {
      let result = eval(expression);
      if (result === 'Unexpected end of input') {
        throw new Error();
      }
      // if (isNaN(result) || !isFinite(result)) {
      //   throw new Error('undefined');
      // }
      this.result = result;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
}


let calc = new Calculator(5);
console.log(calc.calculate("5 + abc "));



// console.log(eval(`5 + abc`));
let str = `5 + abc`
str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "")
str = str.replace(/[a-zA-Z]/g, "");
console.log(str);
module.exports = Calculator;
