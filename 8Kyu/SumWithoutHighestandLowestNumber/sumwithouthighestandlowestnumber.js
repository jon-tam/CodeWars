//My solution
function sumArray(array) {
    return array !== null && array !== undefined && array.length !== 1 && array.length !== 2 ? array.sort((a,b) => a - b).slice(1,array.length-1).reduce((acc,c) => acc += c,0) : 0
  }

//My solution but cleaner?
// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0