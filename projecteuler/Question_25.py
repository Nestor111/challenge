# 1000 Digit Fibonnaci Number

def fib(n):
    fibs = [0, 1]
    while len(str(fibs[-1])) < n:
        fibs.append(fibs[-1] + fibs[-2])
    return len(fibs) - 1 