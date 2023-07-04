// Helper recursive function
//[1,2,3,4,5,6,7,8,9,10]
//[1,3,5,7,9] -> output
//conditions
// number%2 !== 0


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function getOddNumbers(array) {
//     return array.filter(number => number % 2 !== 0);
//   }
  

//   const oddNumbers = getOddNumbers(numbers);
//   console.log(oddNumbers);

function getOddNum(array){
let newArr = [];
for(let number of array){
    if(number % 2 !== 0){
      newArr.push(number);
    } 
}
      return newArr;
}
let arr = getOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(arr);