def gcd (a,b):
    while b>=1:
        r = a%b
        a=b
        b=r
        if b==0:
            return a

gcd(10,4)
