N = int(input())
arr = {}
for i in range(N):
    book = input()
    if book in arr:
        arr[book] += 1
    else:
        arr[book] = 1
        
b = sorted(arr.items(), key=lambda x: (-x[1],x[0]))

print(b[0][0])