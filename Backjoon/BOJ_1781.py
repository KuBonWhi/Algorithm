import heapq
import sys

read = sys.stdin.readline

N = int(read().strip("\n"))
quests = []

for _ in range(N):
    d, c = map(int, read().strip("\n").split())
    quests.append([d, c])

queue = []


quests.sort()


for d,c in quests:
    heapq.heappush(queue, c)
    if d < len(queue):
        heapq.heappop(queue)
        
print(sum(queue))