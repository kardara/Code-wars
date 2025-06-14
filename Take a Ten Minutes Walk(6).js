function isValidWalk(walk) {
    if (walk.length !== 10) return false;
  
    let x = 0, y = 0;
  
    for (let direction of walk) {
      if (direction === 'n') y++;
      if (direction === 's') y--;
      if (direction === 'e') x++;
      if (direction === 'w') x--;
    }
  
    return x === 0 && y === 0;
  }