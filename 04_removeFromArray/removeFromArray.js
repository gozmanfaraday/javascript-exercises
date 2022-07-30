const removeFromArray = function(array, element, ...moreElements) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      array.splice(i, 1);
    }
  }

  for (let anotherElement of moreElements) {
    for (let i = 0; i < array.length; i++) {
      if (anotherElement === array[i]) {
        array.splice(i, 1);
      }
    }
  }
  
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
