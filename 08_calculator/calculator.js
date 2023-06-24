const add = function(firstNumber, secondNumber) {
	return firstNumber+secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber-secondNumber;
};

const sum = function(args) {
	let total=0;
  for(element of args){
    total+=element;
  }
  return total;
};

const multiply = function(...args) {
  let total=1;
  for(element of args){
    total*=element;
  }
  return total;
};

const power = function(firstNumber, secondNumber) {
  let result = Math.pow(firstNumber, secondNumber);
  return result;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

console.log(power(4,3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
