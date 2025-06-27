export function orderedCount(text: string): [string, number][] {
  const map = new Map<string, number>();

  for (const char of text) {
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    } else {
      map.set(char, 1);
    }
  }

  return Array.from(map.entries());
}
