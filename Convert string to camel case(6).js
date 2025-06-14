let toCamelCase = (str) =>
  str
    .split(/[^a-zA-Z]/g)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
