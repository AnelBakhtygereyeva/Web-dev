def last2(str):
  if(len(str) < 2):
    return 0
  last2_sub = str[-2:]
  return sum(str[i:i+2] == last2_sub for i in range(len(str) - 2))