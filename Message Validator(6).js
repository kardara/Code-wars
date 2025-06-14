function isAValidMessage(message) {
  let parts = message.match(/\d+|[a-zA-Z]+/g) || [];

  for (let i = 0; i < parts.length; i += 2) {
    let num = Number(parts[i]);
    let word = parts[i + 1] || "";

    if (word.length !== num) return false;
  }

  return true;
}
