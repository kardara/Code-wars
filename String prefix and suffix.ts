export function solve(s: string): number {
  const n = s.length;
  let maxLen = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (s.slice(0, i) === s.slice(n - i)) {
      maxLen = i;
    }
  }
  return maxLen;
}