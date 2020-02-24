var moveZeros = function (arr) {
    // TODO: Program me
    // filter the 0 and push to the end
    return arr.filter(num=> num!==0).concat(arr.filter(num => num ===0));
  }