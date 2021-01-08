def gcd (a,b):
    while b>=1:
        r = a%b
        a=b
        b=r
        if b==0:
            return a

def coprime (num):
    array = []
    for k in range(1,num):
        if gcd(k,num)==1:
            array.append(k)
    return len(array)

def graycode (length):
    oldarr = ['0', '1']
    for k in range(1,length):
        newarr = []
        for x in range(0,len(oldarr)):
            newarr.append(oldarr[x]+'1')
            newarr.append(oldarr[x]+'0')
        oldarr=newarr
    return oldarr

graycode (9)

def findFactor (num):
    answer = []
    for k in range(2,num):
        # print(k)
        if num%k==0:
            answer.append(k)
    return answer

findFactor (20)

def findPrime (num):
    factors = findFactor(num)
    if len(factors) == 0:
        return True
    else:
        return False

findPrime (20)

def goldbach(num):
    for k in range(2,num):
        # print(findPrime(k))
        if findPrime(k)==True:
            if findPrime(num-k)==True:
                return [k, num-k]

# goldbach(202345948)

def test_gcd():
    assert gcd(10,4) == 2
    assert gcd(20,4) == 4
    assert gcd(19,4) == 1
    assert gcd(9,63) == 9

def test_coprime():
    assert coprime(10) == 4
    assert coprime(15) == 8

def test_golbach():
    assert goldbach(8) == [3,5]
    assert goldbach(10) == [3,7]
    assert goldbach(15) == [2,13]

def test_graycode():
    assert graycode(4) == ['0111', '0110', '0101', '0100', '0011', '0010', '0001', '0000', '1111', '1110', '1101', '1100', '1011', '1010', '1001', '1000']