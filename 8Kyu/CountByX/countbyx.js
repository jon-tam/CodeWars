//My Solution
function countBy(x, n) {
    let z = new Array(n);
    for(let i = 1; i <= n; i++){
      z[i-1] = i * x 
    }
    return z;
  }

//Easier Method: define empty array, use z.push to iterate and add to the end
//One line solution using array.from
//const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
  

