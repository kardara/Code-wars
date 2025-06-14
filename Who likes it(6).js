function likes(names) {
  let arr = names;
  if (arr.length === 0) return "no one likes this";
  else {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      count += 1;
    }
    if (count === 1) return arr[0] + " likes this";
    else if (count === 2) return arr[0] + " and " + arr[1] + " like this";
    else if (count === 3)
      return arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
    else {
      var c = 0;
      for (var i = 2; i < arr.length; i++) {
        c += 1;
      }
      return arr[0] + ", " + arr[1] + " and " + c + " others like this";
    }
  }
}
