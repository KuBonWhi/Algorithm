n = int(input())
k = int(input())
arr = list(map(int, input().split(" ")))
arr.sort()
subtractList=[]

for i in range(n-1):
    subtractList.append(arr[i+1]-arr[i])
    
subtractList.sort()  

if subtractList:
    for _ in range(k-1):
        subtractList.pop()
        
    print(sum(subtractList))

else:
    print(0)