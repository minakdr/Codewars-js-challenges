const binaryArrayToNumber = arr => {
    let s = 0
    if(arr[0]===1){
      s=s+8}
    if(arr[1]===1){
      s=s+4}
    if(arr[2]===1){
      s=s+2}
    if(arr[3]===1){
      s=s+1}
    return s;
  };