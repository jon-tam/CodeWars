function sumOfMinimums(arr) {
    return arr.reduce((acc,c) => acc += Math.min(...c), 0)
  }