function findMinNum(numDiv) {
  function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        count += i === n / i ? 1 : 2;
      }
    }
    return count;
  }

  let num = 1;
  while (true) {
    if (countDivisors(num) === numDiv) {
      return num;
    }
    num++;
  }
}
