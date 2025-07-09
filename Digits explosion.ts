export function explode(s: string): string {
  return s.split('').map(char => char.repeat(Number(char))).join('');
}