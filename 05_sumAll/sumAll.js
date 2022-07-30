const sumAll = function(firstNum, lastNum) {
  if (
    (firstNum < 0 || lastNum < 0) ||
    (typeof firstNum !== 'number' || typeof lastNum !== 'number')
  ) {
    return "ERROR";
  } else {
    if (firstNum < lastNum) {
      let sum = firstNum;
      for (let i = (firstNum + 1); i <= (lastNum); i++) {
        sum = sum + i;
      }
  
      return sum;
    } else if (lastNum < firstNum) {
      let sum = lastNum;
      for (let i = (lastNum + 1); i <= (firstNum); i++) {
        sum = sum + i;
      }
  
      return sum;
    } else {
      sum = firstNum + lastNum;
  
      return sum;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
