function findOdd(A) {
    //happy coding!
    //for each value find length not even
    count=0
    for (let i in A){
    for (let j in A){
    if(A[i]==A[j])
    count++;
    }
    if (count%2)
    return A[i];
    }
    
    
  }
  //best practice
  function findOdd(A) {
    return A.reduce(function(c,v){return c^v;},0);//xor not similar in
  }
  function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }
  function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }

  //test
  function doTest(a, n) {
    console.log("A = ", a);
    console.log("n = ", n);
    Test.assertEquals(findOdd(a), n);
  }
  Test.describe('Example tests', function() {
    doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    doTest([10], 10);
    doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
  });