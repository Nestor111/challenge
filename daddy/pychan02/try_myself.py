iam_alist = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
iam_alist[:2]
iam_alist[2:]
iam_alist[:]

x = 1
while x<10:
    print(x)
    if x % 2 == 0:
        break
    x+=1

for k in range(1,10):
    print(k)
