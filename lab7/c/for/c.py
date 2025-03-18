import math

a = int(input())
b = int(input())

smallest = math.ceil(math.sqrt(a))
biggest = math.floor(math.sqrt(b))

for i in range(smallest, biggest + 1):
    print(i * i, end=" ")