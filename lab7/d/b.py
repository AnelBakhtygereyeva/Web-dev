a = int(input())
arr = list(map(int, input().split()))
print(" ".join(str(num) for num in arr if num % 2 == 0))