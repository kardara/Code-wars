function fib_rabbits(n, b) {
  let immaturePairs = 1;
  let maturePairs = 0;

  for (let month = 0; month < n; month++) {
    let newImmature = maturePairs * b;
    maturePairs += immaturePairs;
    immaturePairs = newImmature;
  }

  return maturePairs;
}
