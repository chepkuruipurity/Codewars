function accum(s) {
	// your code
  //input is a string where split into array
  
  //for each index value output should be capital
  // and increment that value for the rem indexes
  //i[0]=1,i[1]=2,i[2]=3...
  //should be separated by -
  let arr= s.split('');
  for(let i=0; i<arr.length;i++){
  arr[i]= arr[i].toUpperCase()+ arr[i].repeat(i).toLowerCase();
  
  }
  return arr.join('-');
  
}
//best practice
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  