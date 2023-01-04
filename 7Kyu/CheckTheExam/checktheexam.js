function checkExam(array1, array2) {
  let score = 0
  
  for(let i = 0; i < array1.length; i++){
     if(array1[i] === '' || array2[i] === ''){
       score +=0
     }else if( array1[i] === array2[i]){
       score += 4
     }else if(array1[i] !== array2[i]){
       score -= 1
     }else{
       score += 0
     }
 }
  if(score < 0){
    return 0
  }else{
    return score
  }
}

//One Line Solution
//checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;