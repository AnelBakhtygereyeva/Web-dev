import math
a = int(input())

for i in range(1, int(math.sqrt(a)) + 1):
    print(i*i, end="\n")