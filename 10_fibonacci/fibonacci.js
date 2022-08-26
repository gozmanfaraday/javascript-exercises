const fibonacci = function(number) {
  number = Number(number);
  let prev = 0;
  let next = 1;
  let sum = 1;

  if (number < 1) {return "OOPS"};

  for (let i = 1; i < number; i++) {
    sum = prev + next;
    prev = next;
    next = sum;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
