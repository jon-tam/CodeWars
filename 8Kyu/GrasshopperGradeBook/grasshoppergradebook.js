//My Solution
function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3)/3
    
    return average <= 100 && average >= 90 ? 'A' :
           average <= 90 && average >= 80 ? 'B'  :
           average <= 80 && average >= 70 ? 'C'  :
           average <= 70 && average >= 60 ? 'D'  :
           'F'
  }

  //No need to check for upper bound
//   function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }