const largestArrangement = (array) =>
  +array
    .map((n) => n.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
