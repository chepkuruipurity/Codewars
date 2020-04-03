function area(d,l){
    //Write your own Code!
    // if d <= l, return no rectangle
    // w = sqrt [ d2-l2]
    
if(d<=1){
    return "Not a rectangle.";
    } else {
    let width= Math.sqrt( d**2- l**2);
    return Number((l*width).toFixed(2));
    }
    function area(d,l){
        return (d <= l) ? 'Not a rectangle' : +(Math.sqrt(d**2 - l**2) * l).toFixed(2);
      }
    }
    area(12,5);