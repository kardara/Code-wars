let womensAge = (n) =>
  `${n}? That's just ${n % 2 === 0 ? "20" : "21"}, in base ${
    n % 2 === 0 ? n / 2 : (n - 1) / 2
  }!`;
