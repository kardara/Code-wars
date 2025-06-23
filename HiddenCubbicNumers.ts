export function isSumOfCubes(s: string): string {
  const digitGroups: string[] = [];

  const matches = s.match(/\d+/g);
  if (!matches) return "Unlucky";

  for (const match of matches) {
    for (let i = 0; i < match.length; i += 3) {
      digitGroups.push(match.slice(i, i + 3));
    }
  }
  const cubics: number[] = digitGroups.filter(group => {
  const num = Number(group);
  const cubeSum = [...group].reduce((sum, digit) => sum + Math.pow(Number(digit), 3), 0);
  return cubeSum === num;
}).map(Number);

  if (cubics.length === 0) {
    return "Unlucky";
  } else {
    const sum = cubics.reduce((a, b) => a + b, 0);
    return `${cubics.join(' ')} ${sum} Lucky`;
  }
}