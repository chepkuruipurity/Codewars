function tribonacci(signature,n){
    //your code here
    // the first three position take signature
    // from three onward sum the last three to give niext
   let trib=[];
      trib[0]=signature[0], trib[1]=signature[1],trib[2]= signature[2];
   for(let i=3;i<n; i++){
   trib[i]= trib[i-1] + trib[i-2] + trib[i-3];}
   return (n<3)? trib.slice(0,n): trib;
    
  
    
    
  }