//My Solution
function doubleChar(str) {
    return str.split('').reduce(function (res,current,index,array){ return res.concat([current, current]);},[]).join('')
}
//Solved using map
// const doubleChar = (str) => str.split("").map(c => c + c).join("");