//Solution in one line with fat arrow function
const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

//Top condesnsed solution:
// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }