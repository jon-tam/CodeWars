const reverseSeq = n => {
    const arr = []
    
    for(let i = 1; i <=  n; i++){
      arr[i-1] = i
    }
    return arr.reverse();
  };

// Compact Solution:
//   const reverseSeq = n => {
//   return Array(n).fill(0).map((e, i) => n - i );
// };