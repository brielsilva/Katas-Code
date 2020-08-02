/* Write a program that finds the summation of every number from 1 to num. The number will always be a 
positive integer greater than 0. */

let summation = function (num) {
    let i = 1;
    while(num > 1){
        i += num;
        num--;
    }
    return i;
}

console.log(summation(8));

var summation = function f(num) {
    return num ? num + f(num-1) : 0;
  }

  var summation = function f(num) {
    return num ? num + f(num-1) : 0;
  }