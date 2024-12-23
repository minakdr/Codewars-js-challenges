function squareDigits(num){
    num=num.toString()
    num=num.split('')
    map=num.map((el) => el*el);
    console.log(map);
    map=map.toString()
    map=map.replaceAll("[","")
    map=map.replaceAll(",","")
    map=map.replaceAll("]","")
    console.log(map);
    map=parseInt(map)
    
    

    return map;
  }

  
console.log(squareDigits(52));