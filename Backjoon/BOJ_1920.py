
n = int(input())
n_list = input()
m = int(input())
m_list = input()

n_list = list(map(int, n_list.split(" ")))
m_list = list(map(int, m_list.split(" ")))

n_list.sort()

def binary(target):
    left = 0
    right = n -1
    
    while left <= right:
        mid = (left+right) // 2
        if n_list[mid] == target:
            return True
        
        if target < n_list[mid]:
            right = mid -1
        elif target > n_list[mid]:
            left = mid + 1
            
for i in range(m):
    if binary(m_list[i]):
        print(1)
    else:
        print(0)