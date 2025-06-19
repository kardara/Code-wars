export function calcType(a: number, b: number, c: number): string {
  return "addition|multiplication|subtraction|division".split('|')[a+b==c?0:a*b==c?1:a-b==c?2:3];
}