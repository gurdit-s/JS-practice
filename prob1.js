//Problem 1
// checking sum zero
//[-5,-4,-3,-2,0,2,4,6,8] --> inline
//[-4,4] --> output
function sumPairZero(array){
    for (let number of array){
    for( let j=1; j < array.length; j++){
    if (number + array[j] === 0){
    return[number,array[j]]
    }
    }}}
    let sum = sumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
    console.log([sum])