import heapq
import sys

read = sys.stdin.readline

N = int(read().strip("\n"))
quests = []

for i in range(N):
    quests.append(list(map(int, read().strip("\n").split())))

quests.sort()
queue = []

for d,w in quests:
    heapq.heappush(queue, w)
    if d < len(queue):
        heapq.heappop(queue)

print(sum(queue))