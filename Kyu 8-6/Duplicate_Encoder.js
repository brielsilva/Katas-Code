function duplicateEncode(word){
    // Vou iterar por toda a palavra, criando um objeto com a key sendo a letra e o valor o número de vezes que 
    // este caractere aparece
  
    // I will iterate through the word, creating an object with the key, 
    // the letter and the value being the number of times this character appears
  
    // Se o numero de vezes que a palavra aparacer for mais de 1, é retornado ')'
    // se não é ')'
  
    // if the number of times the word appears is more than 1, then the return is
    // ')' if not '(';
    
    const num = word.split('').reduce((acc,value) =>{
        if(acc.hasOwnProperty(value.toLowerCase())){
            acc[value.toLowerCase()]++;
            return acc; 
        }
        else{
            acc[value.toLowerCase()] = 1;
            return acc;
        }
    },{})
    const endoce = []; 
    word.split('').forEach((value) =>{
        if(num[value.toLowerCase()] == 1){
            endoce.push('(');
        }
        else{
            endoce.push(')');
        }
        
    })
    return endoce.join('');
    
}


