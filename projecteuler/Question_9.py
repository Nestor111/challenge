# Pythagorean Triad

def pythagoras(num):
    for k in range(1, num):
        for j in range(k+1, num):
            c = num - (k + j)
            if((k**2) + (j**2) == (c**2)):
                if k + j + c == num:
                    print(k, j, c)
                    break

pythagoras(1000)
