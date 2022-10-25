//My Solution
function getMiddle(s)
{
  if(s.length % 2 === 0){
    //Return 2 Mid Chars
    return s.charAt((s.length/2)-1) + s.charAt(s.length/2)
  }else{
    //Odd return 1 Mid Char
    return s.charAt(s.length/2)
  }
}

//Best Solution using slice
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }


