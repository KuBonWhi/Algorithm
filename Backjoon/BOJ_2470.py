n = int(input())
arr = list(map(int, input().split(' ')))

arr.sort()

left = 0
right = n-1
final = []
max = float('INF')

while left < right:
    s_left = arr[left]
    s_right = arr[right]
    
    tot = s_left+s_right
    if abs(tot) < max:
        max = abs(tot)
        final = [s_left, s_right]
        
    if tot < 0:
        left+=1
    else:
        right -=1
        
print(final[0], final[1])