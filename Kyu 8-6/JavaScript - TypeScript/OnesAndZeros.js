
    /*      First Attempt       */
function binaryArrayToNumber(num){    
    const numbe =num.reverse().reduce((acc,value,index) =>{
    return acc += (value * (2**index));
},0);
    return numbe;
}



