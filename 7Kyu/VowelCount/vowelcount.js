function getCount(str) {
    let vowel = 0
    
    str.split('').forEach(s => {
      switch(s){
          case 'a':
            vowel++
            break
          case 'e':
            vowel++
            break
          case 'i':
            vowel++
            break
          case 'o':
            vowel++
            break
          case 'u':
            vowel++
            break
          default:
            break
      }
    })
    return vowel
}