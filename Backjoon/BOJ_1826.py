import heapq

N = int(input())
gas_q = []


for _ in range(N):
    heapq.heappush(gas_q, list(map(int, input().split())))
    
target, fuel = map(int, input().split())

move = []
cnt = 0



while fuel < target:
    while gas_q and gas_q[0][0] <= fuel:
        gs, f = heapq.heappop(gas_q)
        heapq.heappush(move, [-f,gs])
        
    if not move:
        cnt = -1
        break
    
    f, gs = heapq.heappop(move)
    fuel += -f
    cnt += 1

    
print(cnt)


