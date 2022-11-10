//My Solution
function solution(str, ending){
    return str.substring(str.length - ending.length, str.length) === ending ? true : false
  }

//This method exists?
function solution(str, ending){
    return str.endsWith(ending);
  }