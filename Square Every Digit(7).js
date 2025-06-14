function squareDigits(num) {
  let numStr = num.toString();
  let concat = "";
  for (let i = 0; i < numStr.length; i++) {
    let a = parseInt(numStr[i]);
    let b = a * a;
    concat += b.toString();
  }
  return parseInt(concat);
}
