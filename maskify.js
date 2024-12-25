
function maskify(cc) {
    cc=cc.split('')
    for ( let i = 0; i< cc.length - 4 ;i++){
      cc[i]='#' } 
      cc=cc.toString().replaceAll(',','')
    return cc.toString()
  }
