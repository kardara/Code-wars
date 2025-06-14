function daysRepresented(trips) {
  let uniqueDays = new Set();

  for (let i = 0; i < trips.length; i++) {
    for (let day = trips[i][0]; day <= trips[i][1]; day++) {
      uniqueDays.add(day);
    }
  }

  return uniqueDays.size;
}
