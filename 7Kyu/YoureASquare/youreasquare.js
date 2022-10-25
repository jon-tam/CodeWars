var isSquare = function(n){
    return Math.sqrt(n) % 1 !== 0 ? false : true
}

//Slightly tighter solution without the terenary using implicit return
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
// }