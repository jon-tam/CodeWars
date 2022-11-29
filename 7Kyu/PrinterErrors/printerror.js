//P function takes a string that represents colors
//R function returns a string of ration numerator intger on top and length of string denom
//E 
//P 

function printerError(s) {
    let numberError = 0
    
    //Turn s into an array, then check if each element is equals to char n-z, if true increase numberError counter
    let error = s.split('').forEach((x,i) => s[i].match(/[n-z]/g) ? numberError++ : numberError)
                                    
    return `${numberError}/${s.length}`
}

//Simplest solution not using Regex
// function printerError(s) {
//     // your code
//     var count = 0;
//     for(var i = 0; i < s.length; i++) {
//       if (s[i] > "m") {
//         count++;
//       }
//     }
//     return count+"/"+s.length;
// }