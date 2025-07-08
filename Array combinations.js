let solve = (arr) =>
  arr.map((sub) => new Set(sub).size).reduce((acc, val) => acc * val, 1);
