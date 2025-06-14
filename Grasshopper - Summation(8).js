var summation = function (num) {
  var sum = 0;
  if (num < 0) {
    console.log("Please enter a positive number!");
  } else {
    for (var i = 1; i <= num; i++) {
      sum = sum + i;
    }
  }
  return sum;
};
summation(2);
