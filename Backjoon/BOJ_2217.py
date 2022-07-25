n = int(input())

loaf = []
for i in range(n):
    loaf.append(int(input()))
loaf.sort(reverse=True)

for i in range(n):
    loaf[i] = loaf[i]*(i+1)

print(max(loaf))