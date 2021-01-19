# Find the difference of the sum of the squares up to 100 and the square of the sum up to 100

def sumSquare(limit):
    sumSquare = []
    for k in range (0, limit):
        k = k + 1
        sumSquare.append(k ** 2)
    return sum(sumSquare)

def squareSum(limit):
    sum = 0
    for k in range(0, limit):
        k = k + 1
        sum = sum + k
    return sum**2

def diff(limit):
    return squareSum(limit)-sumSquare(limit)