# Digit Sum of 2 to the power of 1000

def digitSum(n):
    sum = 0
    while n:
        sum += n % 10
        n //= 10
    return sum

def answer():
    return digitSum(2**1000)