const repeatString = function(string, num) {
  let repeat = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      repeat = repeat + string;
    }
  
    return repeat;
  }
};

// Do not edit below this line
module.exports = repeatString;
