import heapq

def solution(jobs):
    answer, now, index = 0, 0, 0
    start = -1
    heap = []
    
    while index < len(jobs):
        
        for job in jobs:
            if start < job[0] <= now:
                heapq.heappush(heap, [job[1], job[0]])
                
        if len(heap) > 0:
            cur = heapq.heappop(heap)
            start = now
            now += cur[0]
            answer += now - cur[1]
            index += 1
        else:
            now += 1
    
    return answer // len(jobs)



print(solution([[0, 3], [1, 9], [2, 6]]))