function openOrSenior(data){
    let mdata = [] ;
    for (let i = 0 ; i < data.length ; i++) {
      if (data[i][0] >= 55 && data [i][1] > 7 ) { 
        
        mdata.push("Senior" ) ;
        
      }
      else {
        
         mdata.push("Open" );
        
      }
    }
    
    return  mdata
    
  }