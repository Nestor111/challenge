# Factorial Digit Sum Of 100

def factorial (limit):
    digit = 1
    for k in range (2, limit):
        digit = digit*k
    return digit

factorial(100)

def digitSum(n):
    sum = 0
    while n:
        sum += n % 10
        n //= 10
    return sum

digitSum(933262154439441526816992388562667004907159682643816214685929638952175999932299156089414639761565182862536979208272237582511852109168640000000000000000000000)