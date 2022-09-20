package kata

func MinMax(a,b int) (int,int) {
  if a < b {
    return a,b;
  } else {
    return b,a;
  }
}

func GetSum(a, b int) int {
  min,max := MinMax(a,b);
  count := 0;
  for min <= max {
    count+=min;
    min++;
  }
  return count;
}