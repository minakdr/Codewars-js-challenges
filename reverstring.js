function solution(str){
    let strr =''
    for( let i = str.length-1 ; i>=0 ; i--){
      strr=strr.concat(str[i])
      console.log(i)
      
    }
    return strr
  }