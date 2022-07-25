import heapq
import sys

read = sys.stdin.readline

rooms = []
N = int(read().strip("\n"))
for i in range(N):
    rooms.append(list(map(int, read().strip("\n").split())))

rooms.sort()
queue = []

heapq.heappush(queue, rooms[0][1])


for i in range(1, N):
    if rooms[i][0] < queue[0]:
        heapq.heappush(queue, rooms[i][1])
    else:
        heapq.heappop(queue)
        heapq.heappush(queue, rooms[i][1])

print(len(queue))