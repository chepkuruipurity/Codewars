function union(s1, s2){
    //...new set
    //define values for each
    let unionSet= new Set(s1);
    for(let i of s2){
    unionSet.add(i);
    }
    return unionSet;
  }
  //best practice
  function union(s1, s2) {
    return new Set([...s1, ...s2]);
  }