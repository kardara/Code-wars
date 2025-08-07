function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  return +(
    (numberOfSides / 2) *
    Math.pow(circleRadius, 2) *
    Math.sin((2 * Math.PI) / numberOfSides)
  ).toFixed(3);
}
