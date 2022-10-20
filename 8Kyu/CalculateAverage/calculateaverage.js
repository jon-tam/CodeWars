function findAverage(array) {
    if(!array || !array.length){
      return 0
    }else{
      return array.reduce((acc,c) => acc += c, 0)/array.length 
    }
  }

  //var find_average = (array) => {  
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }