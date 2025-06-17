export function printerError(s: string): string {
  const validColors = /^[a-m]$/;
  let errorCount = 0;

  for (const char of s) {
    if (!validColors.test(char)) {
      errorCount++;
    }
  }

  return `${errorCount}/${s.length}`;
}