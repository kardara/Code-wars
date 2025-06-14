function fortune(f0, p, c0, n, i) {
  p /= 100;
  i /= 100;
  for (let year = 1; year < n; year++) {
    f0 = Math.trunc(f0 + f0 * p - c0);
    c0 = Math.trunc(c0 + c0 * i);
    if (f0 < 0) {
      return false;
    }
  }
  return true;
}
