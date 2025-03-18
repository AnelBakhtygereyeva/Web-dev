a = int(input())
arr = input().split()

count = 0

for i in arr:
    if int(i) > 0:
        count += 1
print(count)

