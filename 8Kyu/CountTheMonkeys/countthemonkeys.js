//My Solution
function monkeyCount(n) {
    let result = []
    
    for(let i = 0; i < n; i++){
      result[i] = i + 1  
    }
    return result
}

//Solved with Array.From
// function monkeyCount(n) {
//     return Array.from({length:n}, (_,i)=>i+1)
//   }