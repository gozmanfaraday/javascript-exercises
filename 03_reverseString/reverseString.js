const reverseString = function(string) {
  let splitString = string.split("");
  let reverseSplitString = splitString.reverse();
  let reverseString = reverseSplitString.join("");
  
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
