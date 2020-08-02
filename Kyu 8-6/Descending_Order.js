/* Your task is to make a function that can take any non-negative integer as a argument and return it with 
its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

/* function descendingOrder(n){
    // I have no idea how to Work things out with number, so a parse the argument
    // to a string
    const string = new String(n);
    // After that, i create a array with every number occupying a index and then sort
    const descending = string.split('').sort((a,b) =>{
      return b - a;
    }).join('');
    // Returning a int instead a string
    return parseInt(descending);

}


function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  } */

  function descendingOrder(n){
    return (n + '').split('').sort(function(a,b){ return b - a }).join('');
  }

  console.log(typeof descendingOrder(20))