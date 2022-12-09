function correct(string)
{
  let result = string
  
  if(string.match(/[5]/g)){
    result = string.replace(/5/g,'S')
  }
  if(string.match(/[0]/g)){
    result = result.replace(/0/g,'O')
  }
  if(string.match(/[1]/g)){
    result = result.replace(/1/g,'I')
  }
  
  return result
}

//Solved with one line replace
// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')