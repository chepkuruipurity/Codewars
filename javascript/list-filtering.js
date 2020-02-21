function filter_list(l) {
    // Return a new array with the strings filtered out
    const number =l.filter( (num)=> num >= 0 && typeof num ==='number');
   return number;
  }