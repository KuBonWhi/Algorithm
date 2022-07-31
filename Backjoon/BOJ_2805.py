n, m= map(int,input().split(" "))

arr = list(map(int, input().split(" ")))

arr.sort()

start = 1
end = max(arr)

while start <= end:
    mid = (start + end)//2
    
    log = 0
    for i in arr:
        if i>=mid:
            log += i - mid
            
    if log >= m:
        start = mid + 1
    else:
        end = mid - 1
        
print(end)

