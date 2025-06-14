function digPow(n, p) {
  let a = n.toString().split("").map(Number);
  let sum = 0;
  for (const i of a) {
    sum += Math.pow(i, p);
    p++;
  }
  if (Number.isInteger(sum / n)) return sum / n;
  else return -1;
}
