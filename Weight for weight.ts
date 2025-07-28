export const orderWeight = (strng: string): string =>
  strng.split(" ").sort((a, b) => {
    return a.split('').reduce((sum, d) => sum + +d, 0) - b.split('').reduce((sum, d) => sum + +d, 0) || a.localeCompare(b);
  }).join(' ');
