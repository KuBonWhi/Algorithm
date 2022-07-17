n = int(input())
n_list = input()
m = int(input())
m_list = input()

n_list = list(map(int, n_list.split(" ")))
m_list = list(map(int, m_list.split(" ")))

dic = {}

for i in n_list:
    if i not in dic:
        dic[i] = 1
    else:
        dic[i] = dic[i]+1

for i in m_list:
    if i in dic:
        print(dic[i], end=" ")
    else:
        print(0,end=" ")
