k, n = map(int, input().split(" "))

rans = []

for i in range(k):
    rans.append(int(input()))

start = 1
end = max(rans)


while start <= end:
    mid = (start + end)//2
    cnt = 0
    
    for ran in rans:
            cnt += ran // mid
    
    if cnt >= n:
        start = mid + 1
    else:
        end = mid - 1
        
print(end)