# Find the sum of all the primes under 2 million
# import math, datetime

def findFactor(num):
    answer = []
    for k in range(2, int(round(math.sqrt(num)+1))):
    # for k in range(2, num):
        if num%k==0:
            answer.append(k)
    return answer

def findPrime(num):
    if len(findFactor(num))==0:
        return True
    else:
        return False

def primesUnder(limit):
    primesTotal = 0
    for k in range (1, limit):
        k = k + 1
        print(k)
        if findPrime(k)==True:
            primesTotal = primesTotal + k
    return primesTotal

# begin_time = datetime.datetime.now()
# primesUnder(2000000)
# end_time = datetime.datetime.now()
# print(end_time - begin_time)