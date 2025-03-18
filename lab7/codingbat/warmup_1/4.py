def diff21(n):
  if(n < 21):
    return(abs(21 - n))
  elif(n > 21):
    return(abs(2*(21 - n)))
  else:
    return 0