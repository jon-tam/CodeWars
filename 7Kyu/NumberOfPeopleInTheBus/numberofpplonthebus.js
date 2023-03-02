var number = function(busStops){
  //PREP
  //P Array within an array
  //R # of ppl still on the bus after the last bus stop
  //E See Test Cases
  //Pseudo Code
  
  //Define currentCount variable
  let currentCount = 0
  
  for(let i = 0; i < busStops.length; i++){
        currentCount += busStops[i][0]  
        currentCount -= busStops[i][1] 
  }
  return currentCount

}