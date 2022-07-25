n = int(input())
arr = []

for i in range(n):
    arr.append(input())

answer = []

def findS(str):
    left = 0
    right = len(str)-1
    count = 0
    
    while left < right:
        if str[left] == str[right]:
            left += 1
            right -= 1
        else:
            if left < right - 1:
                temp = str[:right] + str[right + 1:]
                if temp[:] == temp[::-1]:
                    return 1
            if left + 1 < right:
                temp = str[:left] + str[left + 1:]
                if temp[:] == temp[::-1]:
                    return 1
                return 2
    return count


for ar in arr:
    answer.append(findS(ar))
    
for i in answer:
    print(i)
