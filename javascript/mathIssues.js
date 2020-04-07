/* Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor() */

Math.round = function(number) {
    //  turn into string split by . check for i 1 if 5> add 1 to i0
    let s=number.toString().split('.');
    
    return s.length>1 && Number((s[1].substring(0,1) >= 5))? Number(s[0]) + 1 : Number(s[0]);
       // TODO: fix this
       
    };
    
    Math.ceil = function(number) {
       // TODO: fix this
       let s= number.toString().split('.');
       return s.length>1?Number(s[0] )+ 1: Number(s[0]);
      
    };
    
    Math.floor = function(number) {
       // TODO: fix this
        let s= number.toString().split('.');
        return Number(s[0]);
    };
    //best practices
    //unlike bitwise operators, this works for x >= 2147483648
Math.floor = function floor(x){
   return x - x % 1; 
}
//function calls are expensive, so...
Math.round = function round(x){
   return (x + 0.5) - (x + 0.5) % 1;
}
Math.ceil = function ceil(x){
   return x - x % 1 + !!(x % 1);
}
Math.floor = number => parseInt(number)
Math.round = number => Math.floor(number + 0.5)
Math.ceil  = number => Number.isInteger(number) ? number : Math.floor( number + 1 )

    //test
    Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');

Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');