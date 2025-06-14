function findOdd(A) {
  const counts = {};

  for (let num of A) {
    counts[num] = (counts[num] || 0) + 1;
  }
  for (let num in counts) {
    if (counts[num] % 2 !== 0) {
      return Number(num);
    }
  }
}
