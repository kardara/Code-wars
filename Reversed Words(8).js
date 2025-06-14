function reverseWords(str) {
  let arr = str.split(" ");
  var arr1 = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    arr1 += " " + arr[i];
  }
  return arr1;
}
