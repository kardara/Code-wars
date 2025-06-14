var splitInParts = function (s, partLength) {
  let result = [];
  let currentPart = "";

  for (let i = 0; i < s.length; i++) {
    currentPart += s[i];
    if (currentPart.length === partLength || i === s.length - 1) {
      result.push(currentPart);
      currentPart = "";
    }
  }

  return result.join(" ");
};
