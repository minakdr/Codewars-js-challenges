function findOutlier(integers){
    let so=0;
    let se=0;
   for (let i= 0 ; i < integers.length ; i++) {
     if (integers[i]%2===0 ) {se++ ; e=integers[i]}
     else {so++ ; o=integers[i]}}
    return se>so ? o :e
  
    
  }