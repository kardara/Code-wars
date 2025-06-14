function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
function minimumNumber(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  let add = 0;

  while (!isPrime(sum + add)) {
    add++;
  }

  return add;
}
