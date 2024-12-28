function isValidWalk(walk) {
    if (walk.length !== 10) return false;
  
    let x = 0; 
    let y = 0;
   for (let i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': y++; break;
        case 's': y--; break;
        case 'e': x++; break;
        case 'w': x--; break;
      }
    }
    return x === 0 && y === 0;
  }
  