const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let a = distanceToPump / mpg;
  if (a <= fuelLeft) {
    return true;
  } else {
    return false;
  }
};
