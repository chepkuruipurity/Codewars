function twoSum(numbers, target) {
    // ... create an array of numbers
    //should find two different items add together
    //filter to see if the give target
    //return their indexes in a tuple
    let numIndex={};
    numbers.forEach((num,index)=> numIndex[num]=index);
    for(let i=0;i< numbers.length; i++){
    let diff= target - numbers[i];
    if(numIndex[diff] && numIndex[diff] !== i){
    return [i,numIndex[diff]];
    }
    }
  }