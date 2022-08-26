const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers = [], total = 0) {
  numbers.forEach(number => {
    total += number;
  });
  
  return total;
};

const multiply = function(numbers = [], total = 1) {
  numbers.forEach(number => {
    total *= number;
  });
  
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  let product = 1;

	if (number === 0) {
    return 1;
  }

  for (let i = 1; i <= number; i++) {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
