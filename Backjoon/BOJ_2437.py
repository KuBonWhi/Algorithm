n = int(input())
arr = list(map(int,input().split()))
chu = []

for i in range(n):
    chu.append(arr[i])

chu.sort()
result = 0

for i in range(n):
    if result+1 >= chu[i]:
        result += chu[i]
    else:
        break

print(result+1)


