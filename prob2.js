//Problem 1
// checking sum zero
//[-5,-4,-3,-2,0,2,4,6,8] --> inline
//[-4,4] --> output
//another solution
function findSumPair(array){
let left=0;
let right=array.length-1;

while(left < right){
sum=array[left]+array[right];
if(sum === 0){
    return[array[left],array[right]];
}else if(sum > 0){
    right--;
}else{
    left++;
}
}
}
let result = findSumPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);