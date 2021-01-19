# Collatz Sequence

def collatz(k):
    counter = 1
    while k != 1:
        counter = counter + 1
        if k%2 == 0:
            k = k/ 2
        else:
            k = 3*k + 1
    return counter
    
def answer ():
    current = 0
    high = 0
    for k in range(1,1000000):
        current = collatz(k)
        if current > high:
            high = current
            number = k
    return number