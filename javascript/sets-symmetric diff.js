/*A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Symmetric difference

The symmetric difference is an extension of the complement. Denoted A Δ B, it's the set of all element of A which are not element of B and all element of B which are not element of A.

Example:
{7,8,9,10} Δ {9,10,11,12} = {7,8,11,12}.
Task
Create function symDiff getting 2 sets as arguments and returning a new Set as result of symmetric difference of these sets.

Examples:
A = new Set([1,2,3]);
B = new Set([2,3,4]);

symDiff(A,B) // -> {1,4}
Note: as I've got some problem outputting "Δ" in tests, I will use "^" instead of it.

 */
function symDiff(s1, s2){
    // ...common difference btn sets
    let d= new Set(s1);
    for(let i of s2){
    if(d.has(i)){
    d.delete(i);
    }else {
    d.add(i);
    }
   
    }
    return d;
  }
  //best solution
  function symDiff(s1, s2){
    return  new Set([...s1,...s2].filter(e=>s1.has(e)^s2.has(e)))
  }