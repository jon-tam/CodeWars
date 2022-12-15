function minMax(arr){
    const newArr = arr.sort((a,b) => a-b)
    const result = [0,0]
    result[0] = newArr[0]
    result[result.length-1] = newArr[newArr.length-1]
    return result
}


//Cleaner solution
function minMax(arr) {
    var a = arr.sort(function(a,b) {return a-b});
    return [a[0], a[a.length-1]];
}