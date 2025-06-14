function tripledouble(num1, num2) {
  const a = num1.toString();
  const b = num2.toString();

  for (let i = 0; i < a.length - 2; i++) {
    if (a[i] === a[i + 1] && a[i] === a[i + 2]) {
      const found = a[i];
      for (let j = 0; j < b.length - 1; j++) {
        if (b[j] === found && b[j] === b[j + 1]) {
          return 1;
        }
      }
    }
  }

  return 0;
}
