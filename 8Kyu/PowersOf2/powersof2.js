function powersOfTwo(n){
    let x = 0
    const result = []
    
    for(let i = 0; i <= n; i++){
      result.push(Math.pow(2,i))
    }
    
    return result
  }