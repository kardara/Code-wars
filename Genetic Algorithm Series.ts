export function generate(length: number): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.random() < 0.5 ? '0' : '1';
  }
  return result;
}