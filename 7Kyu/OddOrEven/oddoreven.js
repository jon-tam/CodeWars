function oddOrEven(array) {
   if(array === []){
     return 'even'
   }else{
     if(array.reduce((acc,c) => acc+=c,0)%2 === 0){
       return 'even'
     }else{
       return 'odd'
     }
   }
}

//Refactored
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}