function XO(str) {
    //code here
  let strn= str.toLowerCase();
  return strn.split('x').length == strn.split('o').length;
}