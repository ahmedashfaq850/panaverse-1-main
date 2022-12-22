const {sum,subtract,divide,multiply} = require('../7/q7') 


// this program accepts a parameter favnumber=num and prints a sentence using passed parameter  
const favNumber = (num) => {
  console.log(`My favNumber is ${num}`);
};
const number = 7;
favNumber(number);

// This program  
const numberEight = (...args) => {
  const [numbers, target] = args;
  for (let number of numbers) {
    for (let num of numbers) {
      sum(number, num, target);
      subtract(number, num, target);
      multiply(number, num, target);
      divide(number, num, target);
    }
  }
};
;
numberEight([1, 2, 3, 4, 5, 6, 7, 8, 9]);

