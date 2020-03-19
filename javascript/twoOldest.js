// return the two oldest/oldest ages within the array of ages passed in.
let ages=[1,5,87,45,8,8];
function twoOldestAges(ages){
// take an array of numbers, sort by compare function
//introduce new array push the last two and reverse

ages.sort((a,b)=>b-a);
let oldest=ages.shift();
let older=ages.shift()

return [older,oldest];




}
twoOldestAges([1,5,87,45,8,8]);
//best solution
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }
