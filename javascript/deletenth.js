function deleteNth(arr,n){
    // ... map arr to new list
    //check the num of indexes to <= N hence push to new list
    // else delete num at index > n
    let list=[];
    let counts={};
    arr.forEach(x=>{
    counts[x]=(counts[x] || 0) +1;
    if(counts[x]<= n){
    list.push(x);
    }
    });
   return list;
  }