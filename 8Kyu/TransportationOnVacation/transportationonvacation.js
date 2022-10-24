function rentalCarCost(d) {
    switch(true){
        case d >= 7: 
          return (40 * d) - 50
          break
        case d >= 3:
          return (40 * d) - 20
          break
        default:
          return 40 * d
          break
    }
  }