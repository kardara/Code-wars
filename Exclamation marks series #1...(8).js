function remove(string) {
  //coding and coding....
  if (string.charAt(string.length - 1) === "!") {
    return string.substr(0, string.length - 1);
  } else return string;
}
