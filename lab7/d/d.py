a = int(input())
arr = input().split()

count = 0
prev = int(arr[0])

for i in range(1, a):
    current = int(arr[i])
    if current > prev:
        count += 1
    prev = current
print(count)
