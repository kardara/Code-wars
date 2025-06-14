var isSquare = function (n) {
  let a = Math.sqrt(n);
  if (Number.isInteger(a)) {
    return true;
  } else {
    return false;
  }
};
