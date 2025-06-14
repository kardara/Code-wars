function twoSum(numbers, target) {
  let a = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        if (i == j) continue;
        a.push(i);
        a.push(j);
      }
    }
  }
  return a.slice(0, 2);
}
