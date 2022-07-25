import heapq
import sys

read = sys.stdin.readline

N = int(read().strip("\n"))
hubo = []
for i in range(N):
    hubo.append(int(read().strip("\n")))
me = hubo[0]
count = 0

queue = []


for i in range(1,N):
    heapq.heappush(queue, -hubo[i])

if queue:
    while me <= (-1*queue[0]):
        p = heapq.heappop(queue)
        me += 1
        p = p * (-1)
        count += 1
        p -= 1
        heapq.heappush(queue, -p)

print(count)