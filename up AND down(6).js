function arrange(s) {
  let w = s.split(" ");
  let n = w.length;

  for (let i = 0; i < n - 1; i++) {
    if (
      (i % 2 === 0 && w[i].length > w[i + 1].length) ||
      (i % 2 === 1 && w[i].length < w[i + 1].length)
    ) {
      [w[i], w[i + 1]] = [w[i + 1], w[i]];
    }
  }

  return w
    .map((word, i) => (i % 2 === 0 ? word.toLowerCase() : word.toUpperCase()))
    .join(" ");
}
