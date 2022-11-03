//My Solution
function DNAStrand(dna){
  return dna.split('').map(x => {switch(x){
      case 'A':
        return 'T'
        break
      case 'T':
        return 'A'
        break
      case 'G':
        return 'C'
        break
      case 'C':
        return 'G'
        break
  }}).join('')
}

//Solved with object key pairs instead of a switch statement:
// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }
  
//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }