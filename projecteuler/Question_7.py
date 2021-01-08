# 10001th Prime

def findFactor(num):
    answer = []
    for k in range (1, num):
        if num%k==0:
            answer.append(k)
    return answer

def prime ():
    primeList = []
    for k in range (1, 1000000000000000000000000000):
        if len(findFactor(k))==2:
            primeList.append(k)
    return primeList

prime()