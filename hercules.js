// check your notebook for the calculations ( djoumlat mou3adalatayn )
function beasts(heads, tails){
    let x = 0 ;
    let y = 0 ;
  heads=heads-2*tails
  x = heads / 3 
  y = tails - x
  if (x < 0 || y < 0 || Math.floor(x) !== x || Math.floor(y) !== y) {
    return 'No solutions';
  } 
    else {
    return [y, x];
  } 
  
  }