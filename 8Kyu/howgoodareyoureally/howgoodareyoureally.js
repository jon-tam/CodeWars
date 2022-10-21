//My Solution
function betterThanAverage(classPoints, yourPoints) {
    const average = (classPoints.reduce((acc,c) => acc += c) + yourPoints) / (classPoints.length + 1)
    if(yourPoints > average){
      return true
    }else{
      return false
    }
  }

  //Compact solution:
//   function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
//   }