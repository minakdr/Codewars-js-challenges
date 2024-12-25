function findNextSquare(sq) {  
    if (!Number.isInteger(Math.sqrt(sq))) {return -1;}
    ps=sq+1
     while (!Number.isInteger(Math.sqrt(ps))) {
      ps=ps+1}
  return ps}