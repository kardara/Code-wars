export function productArray(nums: number[]): number[] {
  const l = nums.length;
  const r: number[] = new Array(l).fill(1);
  let p = 1;
  for (let i = 0; i < l; i++) {
    r[i] = p;
    p *= nums[i];
  }
  let s = 1;
  for (let i = l - 1; i >= 0; i--) {
    r[i] *= s;
    s *= nums[i];
  }

  return r;
}
