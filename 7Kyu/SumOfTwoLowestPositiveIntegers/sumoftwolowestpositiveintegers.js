function sumTwoSmallestNumbers(numbers) {  
    let result = numbers.sort((a,b) => a-b)
    return result[0] + result[1]
  }