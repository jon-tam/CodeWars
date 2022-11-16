//My Solution
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc,c) => acc += c,0) + arr2.reduce((acc,c) => acc += c,0)
  }

//Solved with concat function
// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }