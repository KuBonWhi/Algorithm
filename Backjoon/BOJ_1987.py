
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

r, c = map(int, input().split(" "))
board = []
visit = [[0]*c for _ in range(r)]
checkAlpa = set()
ans = 0


for i in range(r):
    board.append(list(input()))

def rangeCheck(x,y):
    if x>=0 and x<r and y>=0 and y<c:
        return True
    else:
        return False

def findC(x,y,c):
    global ans
    
    visit[x][y]=1
    ans = max(ans, c)
    if board[x][y] in checkAlpa:
        return
    else:
        checkAlpa.add(board[x][y])
    
    for i in range(4):
        if rangeCheck(x+dx[i], y+dy[i]) and visit[x+dx[i]][y+dy[i]] == 0:
            findC(x+dx[i], y+dy[i], c+1)
            
    visit[x][y]=0
    checkAlpa.remove(board[x][y])
    
findC(0,0,0)

print(ans)

