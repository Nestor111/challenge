# Larget prime factor of 600851475143

def findPrimeFactor ():
    factors = []
    num = 600851475143  
    for k in range(2, num):
        if num % k == 0:
            factors.append(k)
            num = num / k
            if num == 1:
                break
    return max(factors)

print(findPrimeFactor())