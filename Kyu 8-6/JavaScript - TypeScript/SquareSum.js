function squareSum(numbers){
    return numbers.reduce((acc,value) =>{
        return acc += (value ** 2);
    },0)
}

console.log(squareSum([2,1,0,0]));