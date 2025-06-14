function bucketize(arr) {
  const freqMap = new Map();
  let maxFreq = 0;

  for (const num of arr) {
    const freq = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, freq);
    maxFreq = Math.max(maxFreq, freq);
  }

  const result = new Array(maxFreq + 1).fill(null);

  for (const [num, freq] of freqMap.entries()) {
    if (!result[freq]) result[freq] = [];
    result[freq].push(num);
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i]) {
      result[i].sort((a, b) => a - b);
    }
  }

  return result;
}
