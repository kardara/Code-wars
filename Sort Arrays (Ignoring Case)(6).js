let sortme = (names) =>
  names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
