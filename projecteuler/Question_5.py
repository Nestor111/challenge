# LCM of numbers 1-20

def lcm20 ():
    list = []
    for x in range(1,21):
        list.append(x)
    for x in range(0, 20):
        for k in range(1, i+1):
            if list[x]%list[x-k] == 0:
                list[x] = int(list[x] / list[x-k])
    answer = 1
    for x in range(0, len(list)):
        answer = answer * list[x]
    return answer