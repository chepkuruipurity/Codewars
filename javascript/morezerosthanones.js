/* Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted. */


function moreZeros(s){
    // takes string s and end return an array or null if string is terminated
    // take a string find its binary representation
    // check if binary consists of more zeros than ones k
    
      if (!s) return []
      return [...new Set(s.split('').filter(v=>
      (v.charCodeAt().toString(2).match(/0/g)===null?0:v.charCodeAt().toString(2).match(/0/g).length)>
      (v.charCodeAt().toString(2).match(/1/g)===null?0:v.charCodeAt().toString(2).match(/1/g).length)))]
    }
  //best practice
  function moreZeros(s){
    let arrCodePoints = s.split('').map(c => c.charCodeAt(0)).map(n => n.toString(2));
    let chars = arrCodePoints.filter(s => s.split('0').length > s.split('1').length).map(s => parseInt(s, 2));
    let uniq = new Set(chars);
    return String.fromCharCode(...Array.from(uniq)).split('')
  }    
  //test
  Test.assertDeepEquals(moreZeros('abcde'),['a','b','d'])
Test.assertDeepEquals(moreZeros('Great job!'),['a', ' ', 'b', '!'])
Test.assertDeepEquals(moreZeros('DIGEST'),['D','I','E','T'])
Test.assertDeepEquals(moreZeros('abcdeabcde'),['a','b','d'],'Should not return duplicates values')