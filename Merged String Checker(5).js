function isMerge(s, part1, part2) {
  if (!s && !part1 && !part2) return true;
  if (s.length !== part1.length + part2.length) return false;

  const match1 =
    part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2);
  const match2 =
    part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1));

  return match1 || match2;
}
