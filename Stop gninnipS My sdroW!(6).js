function spinWords(string) {
  let s = string.split(" ");
  if (s.length === 1 && s[0].length >= 5) {
    return s[0].split("").reverse().join("");
  } else {
    if (s[0].length >= 5) {
      var a = s[0].split("").reverse().join("");
    } else a = s[0];

    for (let i = 1; i < s.length; i++) {
      if (s[i].length >= 5) {
        a += " " + s[i].split("").reverse().join("");
      } else a += " " + s[i];
    }
    return a;
  }
}
