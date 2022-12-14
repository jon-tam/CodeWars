var capitals = function (word) {
    let result = []
  let wordArray = word.split('')
  
  for(let i = 0; i < word.length; i++){
    if(wordArray[i] === wordArray[i].toUpperCase()){
      result.push(i)
    }
  }
  return result

};