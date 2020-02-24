function validatePIN (pin) {
    //return true or false
    //length of pin should be 4 or 6 to return true else false
    // make sure it is number
    if(pin.match(/^[0-9]+$/) != null && pin >= 0){
    let lenpin= pin.length;
    return (lenpin == 4 || lenpin == 6);}
    else {
  return false;}
    
  }
  // best solution
  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }