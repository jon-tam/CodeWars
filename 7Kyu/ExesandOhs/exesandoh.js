//Nailed it...Kind of
function XO(str) {
    let xCount = 0
    let oCount = 0
    
    for (let i in str){
      if(str[i] === 'x' || str[i] === 'X'){
        xCount++
      }
    }
         
    for(let i in str){
      if(str[i] === 'o' || str[i] === 'O'){
        oCount++
      }
    }
  
    if(xCount === oCount){
      return true
    }else{
      return false
    }    
}

//Elegant Solution
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }