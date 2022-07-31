const ftoc = function(fahrenheit) {
  let result = (fahrenheit - 32) * (5 / 9);
  let celsius = (Math.round(result * 10)) / 10;
  return celsius;
};

const ctof = function(celsius) {
  let result = (celsius * (9 / 5)) + 32;
  let fahrenheit = (Math.round(result * 10)) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
