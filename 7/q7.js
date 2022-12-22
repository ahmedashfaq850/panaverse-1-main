const sum = (...args) => {
  
  const [number, num, target] = args;
  const check = number + num === target;
  if (check) {
    console.log(`${number}+${num}==8`);
  }
};
const subtract = (...args) => {
  const [number, num, target] = args;
  const check = number - num === target;
  if (check) {
    console.log(`${number}-${num}==8`);
  }
};
const divide = (...args) => {
  const [number, num, target] = args;
  const check = Math.floor(number / num) === target;
  if (check) {
    console.log(`${number}/${num}==8`);
  }
};
const multiply = (...args) => {
  const [number, num, target] = args;
  const check = number * num === target;
  if (check) {
    console.log(`${number}*${num}==8`);
  }
};


const numberEight = (...args) => {
  const [numbers,target] = args;
  for (let number of numbers) {
    for (let num of numbers) {
      sum(number,num,target);
      subtract(number,num,target);
      multiply(number, num,target);
      divide(number, num,target);
      
    }
  }
};

numberEight([1, 2, 3, 4, 5, 6, 7, 8, 9],8);

module.exports= {sum,divide,subtract,multiply}