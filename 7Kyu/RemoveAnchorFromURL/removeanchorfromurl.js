function removeUrlAnchor(url){
    //P url string
    //R return url string with everything after # removed
    //E www.codewars.com#about -> www.codewars.com
    //P Pseudo Code
    
    return !url.includes('#') ? url : url.split('#')[0]
    //Search for # in string, if none return url
  //   if(!url.includes('#')){
  //     return url
  //   }else{
  //     //Split method to divide at '#' and return first part of split string
  //     let result = url.split('#')
  //     return result[0]
  //   } 
  }