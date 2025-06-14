function countPrimeFactors(n) {
  let count = 0;
  let num = n;
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      count++;
      num /= i;
    }
  }
  if (num > 1) count++;
  return count;
}

function kprimesStep(k, step, start, nd) {
  let kPrimes = [];

  for (let i = start; i <= nd; i++) {
    if (countPrimeFactors(i) === k) {
      kPrimes.push(i);
    }
  }

  let result = [];
  for (let i = 0; i < kPrimes.length - 1; i++) {
    if (kPrimes.includes(kPrimes[i] + step)) {
      result.push([kPrimes[i], kPrimes[i] + step]);
    }
  }

  return result;
}
