function rot13(message){
    //your code here
    // string shd not have numbers special characters
    return message.replace(/[a-zA-Z]/g, (c)=>{
    return String.fromCharCode(c.charCodeAt(0) +(c.toUpperCase()<='M'?13:-13));
    
    })
  }
  //other solution
  function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }