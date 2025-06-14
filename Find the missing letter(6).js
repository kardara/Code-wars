function findMissingLetter(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(array[i].charCodeAt(0));
  }

  for (let i = 1; i < a.length; i++) {
    if (a[i] - a[i - 1] > 1) {
      return String.fromCharCode(a[i - 1] + 1);
    }
  }
}
