function findMissing(list) {
  let n = list.length + 1;
  let first = list[0];
  let last = list[list.length - 1];

  let expectedSum = (n * (first + last)) / 2;
  let actualSum = list.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
