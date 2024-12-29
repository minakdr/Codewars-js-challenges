function spot(s1,s2){
    a=[]
    for (let i = 0 ; i<s1.length ; i++){
      if (s1[i]!==s2[i]){
        a.push(i)
        
      }
      
    }
    return a;
  }