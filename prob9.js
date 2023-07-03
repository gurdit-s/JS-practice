//recursion : when function call itself
// if a function call itself then there must be an end point
// otherwise it will get called for infinite time

let counter=1
function demo(number) {
    if(counter > number){
        return;
    }
    console.log("Like this video"+counter)
    counter++
    demo(number) 
} 
demo(10);