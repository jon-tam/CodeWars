const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump ? true: false
  };

  //Alternate Solution
//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump/mpg <= fuelLeft
//   };