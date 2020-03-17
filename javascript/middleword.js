function getMiddle(s)
{
  //Code goes here!
  //find length
  //if len is odd 
  // middle// len/2 math.ceil index
  //return middle character
  //else len/2 return floor, return ceil
  let len= s.length;
  if(len%2){
  for(let i=0; i< len; i++){
  let i= Math.floor(len/2);
  return s[i];
  } }else {
  let i= Math.floor(len/2);
  
  return s[i-1].concat(s[i]);
  }
  
  
}
//best solution
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }