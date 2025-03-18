a = int(input())
arr = input().split()

found = False
prev = int(arr[0])

for i in range(1, a):
    current = int(arr[i])
    if (current > 0 and prev > 0) or (prev < 0 and current < 0):
        found = True
        break
    prev = current
print("YES" if found else "NO")
