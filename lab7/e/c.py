def xor(a, b):
    if(a == 1 and b == 0) or (a == 0 and b == 1):
        return 1
    else:
        return 0
    
a, b = map(int, input().split())
print(xor(a, b))