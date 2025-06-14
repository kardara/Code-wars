function reverseWords(str) {
  return str
    .split(" ")
    .map((i) => i.split("").reverse().join(""))
    .join(" ");
}
