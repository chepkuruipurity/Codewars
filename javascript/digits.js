function digPow(n, p){
    // ...
    let num= String(n)
    let result = 0
    for(let i in num){
      result += num[i] **p;
      p++;
    }
    return Number.isInteger(result/n) ? result/n: -1;
  }