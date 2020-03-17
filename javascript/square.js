var isSquare = function(n){
    // fix me
     //check if n>=0
     // check sqrt if modulus false
     return (n>0 && (n% Math.sqrt(n)===0 )|| n==0)? true:false;
     
   }
   //best solution
   function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }