function numberToPower(number, power){
    if (power === 0) return 1;
    return number * numberToPower(number, power - 1)
  }