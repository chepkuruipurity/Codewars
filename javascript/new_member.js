function openOrSenior(data){
    // ...
    let results = [];
    for(let i=0; i< data.length; i++){
    if(data[i][0]>= 55 && data[i][1]> 7){
    results.push('Senior');
    }else {
    results.push('Open');
    }
    
    }
  return results;
  }

  // better solution
  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }