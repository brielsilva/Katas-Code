function getSum( a,b )
{
   if(a == b) {
     return a;
   }
  // Usar Math.min e Math.max também funciona
  const sort = [a,b].sort((a,b) => a == b ? 0 : a > b ? -1 : 1);
  let min = sort[1];
  const max = sort[0]
  let count = 0;
  for(min; min <= max;min++) {
    count+=min;
  }
  return count;
}