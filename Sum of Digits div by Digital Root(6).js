function digitalRoot(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return n;
}
