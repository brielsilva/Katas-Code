

function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }


/*    // OR

   function list(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
  }

  // OR

  function list( names ){
    return names.reduce(function(prev, curr, i, arr){
      return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
    }, '');
  }

  // OR

  function list(names) {
    return names.map(o => o.name).join(', ').replace(/^(.*)(, )(.*)$/, '$1 & $3');
  }


  //OR

  function list(names){
    return names
             .map((item) => item.name)
             .join(', ')
             .replace(/,\s([^,]+)$/, ' & $1');
  } */