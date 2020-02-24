let h = Math.floor(seconds / 3600)
let m = Math.floor((seconds % 3600) / 60)
let s = Math.floor((seconds % 3600) % 60)

let array = [h,m,s]

let formatted = array.map(function(value){
  if (value.toString().length < 2){
    return "0" + value.toString()
  } else {
    return value
  }
})

return `${formatted[0]}:${formatted[1]}:${formatted[2]}`
// best solution
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }