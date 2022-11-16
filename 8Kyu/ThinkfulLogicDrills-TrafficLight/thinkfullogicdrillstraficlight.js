//My Solution
function updateLight(current) {
  
    switch(current){
        case 'green':
          return 'yellow'
          break
        case 'yellow':
          return 'red'
          break
        case 'red':
          return 'green'
          break
        default:
          return null
    }
}

//Solved by creating key-value pairs
// const updateLight = current => ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
//   })[current]
