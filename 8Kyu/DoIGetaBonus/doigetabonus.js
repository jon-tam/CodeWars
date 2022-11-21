//My Solution
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`
}

//Solved in single line with embeded ternary operator
//const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;