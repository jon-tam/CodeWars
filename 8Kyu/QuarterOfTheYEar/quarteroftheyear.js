//My Solution - Ternary Operator
const quarterOf = (month) => {
    return month === 1 || month === 2 || month === 3 ? 1 : 
           month === 4 || month === 5 || month === 6 ? 2 : 
           month === 7 || month === 8 || month === 9 ? 3 : 
           month === 10 || month === 11 || month === 12 ? 4 : 
            0;
  }

//Clever Solution
//const quarterOf = m => Math.ceil(m/3);