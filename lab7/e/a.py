def min_four(a, b, c, d):
    small = a

    if b < small: 
        small = b
    if c < small:
        small = c
    if d < small:
        small = d

    return small

a, b, c, d = map(int, input().split())
print(min_four(a, b, c, d))
