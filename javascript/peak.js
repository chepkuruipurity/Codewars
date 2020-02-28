function pickPeaks(arr){
  
    //  return {pos:[],peaks:[]}
    //peak is the position value is greater than previous and next is less than it
     var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
      .filter(i => i != 0)
      .filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
    return {pos:pos, peaks:pos.map(i=>arr[i])}
  }