# 10001th Prime

def findFactor(num):
    answer = []
    for k in range (2, num):
        if num%k==0:
            answer.append(k)
    return answer

def primeOrNot(num):
    if len(findFactor(num))==0:
        return True
    else:
        return False

def findPrime(limit):
    listOfPrime = []
    k = 1 
    while len(listOfPrime)<limit:
        k = k + 1
        if primeOrNot(k)==True:
            listOfPrime.append(k)
    return listOfPrime[-1]

print(findPrime(10001))