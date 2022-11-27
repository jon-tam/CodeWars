function enough(cap, on, wait) {
    return cap - on >= wait ? 0 : (on + wait) - cap
}

//Solved with Math.max
// function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
//   }