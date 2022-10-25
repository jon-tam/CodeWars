function highAndLow(numbers){
    let temp = numbers.split(' ').sort((a,b) => a-b)
    let result = temp[temp.length-1] + ' ' + temp[0]
    console.log(result)
    return result
  }

  highAndLow("1 2 3 4 5")