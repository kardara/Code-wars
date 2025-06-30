function splitAndAdd(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr.length <= 1) break;

    let mid = Math.floor(arr.length / 2);
    let left = arr.length % 2 === 0 ? arr.slice(0, mid) : arr.slice(0, mid);
    let right = arr.slice(mid);
    while (left.length < right.length) {
      left.unshift(0);
    }

    arr = right.map((val, idx) => val + left[idx]);
  }
  return arr;
}
