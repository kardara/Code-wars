function solve(arr) {
  return arr.sort(
    (a, b) =>
      arr.filter((x) => x === b).length - arr.filter((x) => x === a).length ||
      a - b
  );
}
