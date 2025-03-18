a = int(input())
b = 0
while b <= a:
    if(2**b >= a):
        print(b)
        break
    b += 1
