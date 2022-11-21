//My Solution in one line
const openOrSenior = data => data.map(x => x[0] >= 55 && x[1] > 7 ? 'Senior' : 'Open')

//Slightly batter variation because it defines parameter into age and handicap
//function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }