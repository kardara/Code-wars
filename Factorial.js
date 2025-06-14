function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("Out of range.");
  } else {
    if (n === 0 || n === 1) return 1;
    else {
      let fact = 1;
      for (var i = n; i > 1; i--) {
        fact *= i;
      }
      return fact;
    }
  }
}
