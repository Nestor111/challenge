# Amicable Number

def findFactorTotal(num):
    answer = []
    for k in range (0, num):
        if num%k==0:
            answer.append(k)
    return sum(answer)

def isAmicable(n):
    b = findFactorTotal(n)
    if findFactorTotal(b) == n:
       if b == n:
          return False
       return True
    else:
       return False

def solve(limit=300):
    testing_number = 1
    answer = 0
    while testing_number <= limit:
        if isAmicable(testing_number) == True:
           answer = answer + testing_number 
        testing_number = testing_number + 1

    return answer

print(solve(10000))