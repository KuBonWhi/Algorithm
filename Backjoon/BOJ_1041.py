n = int(input())
arr = list(map(int, input().split(" ")))
jusa = []
total = 0

if(n==1):
    arr.sort()
    for i in range(0,5):
        total+=arr[i]
else:
    jusa.append(min(arr[0], arr[5]))
    jusa.append(min(arr[1],arr[4]))
    jusa.append(min(arr[2],arr[3]))
    jusa.sort()
    
    min1 = jusa[0]
    min2 = jusa[0] + jusa[1]
    min3 = jusa[0] + jusa[1] + jusa[2]
    
    n1 = (n-2)*(n-2) + 4*(n-1)*(n-2)
    n2 = 4*(n-2) + 4*(n-1)
    n3 = 4

    total += n1 * min1
    total += n2 * min2
    total += n3 * min3
    
print(total)