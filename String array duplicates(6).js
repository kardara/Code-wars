function dup(s) {
  let a = [];
  for (const str of s) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (i === 0 || str[i] !== str[i - 1]) {
        result += str[i];
      }
    }
    a.push(result);
  }
  return a;
}
