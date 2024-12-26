function filter_list(l) {
    nl=[]
  for (let i=0; i<l.length ; i++){
    if (Number.isInteger(l[i]) ){ nl.push (l[i])}
  }
  
    return nl ;
  } 