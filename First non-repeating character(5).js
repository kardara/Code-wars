function firstNonRepeatingLetter(s) {
  // Convert the string to lowercase for case-insensitive comparison
  const l = s.toLowerCase();
  const count = {};

  // Count occurrences of each character
  for (let char of l) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    if (count[l[i]] === 1) {
      return s[i];
    }
  }

  return "";
}
