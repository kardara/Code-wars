function longest(s1, s2) {
  let combined = s1 + s2;
  let uniqueChars = [...new Set(combined)];
  uniqueChars.sort();

  return uniqueChars.join("");
}
