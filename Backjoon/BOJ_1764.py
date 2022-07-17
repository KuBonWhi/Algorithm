n,m = map(int, input().split(" "))

n_list = set()
m_list = set()
for i in range(n):
    n_list.add(input())
for i in range(m):
    m_list.add(input())

inter = sorted(list(n_list & m_list))

print(len(inter))
for name in inter:
    print(name)