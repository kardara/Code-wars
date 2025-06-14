function createPhoneNumber(numbers) {
  let str;
  return (str =
    "(" +
    numbers.slice(0, 3).join("") +
    ") " +
    numbers.slice(3, 6).join("") +
    "-" +
    numbers.slice(6).join(""));
}
