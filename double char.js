function doubleChar(str) {
    let strr=[]
    for (let i = 0 ; i <str.length ; i++){
      strr = strr.concat(str[i].repeat(2));
      console.log(i)
  }
    strr=strr.toString().replaceAll(',','')
  return strr ; }