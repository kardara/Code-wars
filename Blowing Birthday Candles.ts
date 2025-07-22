export function blowCandles(str: string): number {
  const candles = str.split('').map(Number);
  let blows = 0;

  for (let i = 0; i < candles.length; ) {
    if (candles[i] === 0) {
      i++;
    } else {
      for (let j = 0; j < 3 && i + j < candles.length; j++) {
        if (candles[i + j] > 0) candles[i + j]--;
      }
      blows++;
    }
  }

  return blows;
}