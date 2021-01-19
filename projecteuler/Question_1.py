# Multiples of 3 and 5 below 1000

def multiples(limit):
    sum = 0
    for k in range (1, limit):
        if k%3==0 or k%5==0:
            sum = sum + k
    return sum

multiples(1000)