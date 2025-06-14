function breakChocolate(n, m) {
  if (n > 0 && m > 0) {
    if (n !== null || (n !== undefined && m !== null) || m !== undefined) {
      let v = n * m;
      return v - 1;
    } else return 0;
  } else return 0;
}
