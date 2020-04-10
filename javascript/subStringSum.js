/* Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
 */
function sumStrings(a,b) { 
    //turn into union set
    //perform addtion
     
     // remove leading zeros
      var zrx = /^0+/; // remove leading zeros
      a = a.replace(zrx, '').split('').reverse();
      b = b.replace(zrx, '').split('').reverse();
    
      var result = [], max = Math.max(a.length, b.length);
      for (var memo = 0, i = 0; i < max; i++) {
        var res = parseInt(a[i] || 0) + parseInt(b[i] || 0) + memo;
        result[i] = res % 10;
        memo = (res - result[i]) / 10;
      }
    
      if (memo) {
        result.push(memo);
      }
    
      return result.reverse().join('');
    
    }
    //best practices
    function sumStrings(a, b)
{
    var A = a.split(""), B = b.split(""), C = 0, R = "";

    while (A.length || B.length || C)
    {
        C = C + (~~A.pop() + ~~B.pop());
        R = (C % 10) + R;
        C = C > 9;
    }

    return R.replace(/^0+/, "");
}
//test
Test.assertEquals(sumStrings('123','456'),'579')