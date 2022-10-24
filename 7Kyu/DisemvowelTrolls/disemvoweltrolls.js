function disemvowel(str) {
    const newStr = []
    str.split('').forEach(e => {
      e.match(/[aeiou]/ig) ? '' : newStr.push(e)
    })
    return newStr.join('');
  }

//One line Solution
 // return str.replace(/[aeiou]/gi, '');