function squareDigits(num){
    //may the code be with you
    // iterate each and square
   return Number(num.toString().split('').map(i=>i*i).join(''));
  }
  //best practice
  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

//test
Test.assertEquals(squareDigits(9119), 811181);