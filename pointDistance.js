function distanceFromLine(a, b, c) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const [x0, y0] = c;

  if (x1 === x2 && y1 === y2) {
    return Math.hypot(x0 - x1, y0 - y1);
  }

  const numerator = Math.abs(
    (y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1
  );

  const denominator = Math.hypot(y2 - y1, x2 - x1);

  return numerator / denominator;
}
