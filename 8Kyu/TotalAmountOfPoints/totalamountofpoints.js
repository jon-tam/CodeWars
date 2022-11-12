//My Solution
function points(games) {
    let final = 0
    
    games.forEach(ele => {
      let x = ele.charAt(0)
      let y = ele.charAt(2)
      
      if(x === y){
        final++
      }else if(x > y){
        final += 3
      }else{
        final += 0
      }
    })
    return final
    
  }

  //Solved with Reduce and Chained Ternary Operators
  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)