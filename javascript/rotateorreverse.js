function revrot(str, sz) {
    // your code
    //chang str into array
    if(sz<=0||str===''|| sz> str.length) return '';
    
    //check if number then pass reduce fn to sum of digits divisible by two
  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +(b*b*b), 0); 
return str
    .match(new RegExp('.{' + sz + '}', 'g'))
  
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}