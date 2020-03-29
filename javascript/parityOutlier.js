/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)*/

function findOutlier(integers){
    //your code here
    //take integer for each test for even  or odd find length
    let even= integers.filter(i=> i%2===0);
    let odd= integers.filter(i=>i%2);
    return(even.length===1)?even[0]:odd[0];
   
   
  }
  //test
  Test.assertEquals(findOutlier([0, 1, 2]), 1)
2
Test.assertEquals(findOutlier([1, 2, 3]), 2)
3
Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
4
Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
5
Test.assertEquals(findOutlier([1,1,0,1,1]), 0)