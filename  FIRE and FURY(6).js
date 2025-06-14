function fireAndFury(tweet) {
    if (/[^EFIRUY]/.test(tweet)) return "Fake tweet.";
    const matches = tweet.match(/(FIRE|FURY)/g);
    if (!matches) return "Fake tweet.";
    let result = [];
    let i = 0;
    while (i < matches.length) {
      let count = 1;
      while (i + count < matches.length && matches[i + count] === matches[i]) {
        count++;
      }
  
      if (matches[i] === "FIRE") {
        const people = ["You"]
          .concat(Array(count - 1).fill("you"))
          .join(" and ");
        result.push(`${people} are fired!`);
      } else if (matches[i] === "FURY") {
        const really = "really ".repeat(count - 1);
        result.push(`I am ${really}furious.`);
      }
  
      i += count;
    }
  
    return result.join(" ");
  }
  