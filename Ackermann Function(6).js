const Ackermann = (m, n) => {
  if (!Number.isInteger(m) || !Number.isInteger(n) || m < 0 || n < 0) {
    return null;
  }
  if (m === 0) return n + 1;
  if (n === 0) return Ackermann(m - 1, 1);
  return Ackermann(m - 1, Ackermann(m, n - 1));
};
