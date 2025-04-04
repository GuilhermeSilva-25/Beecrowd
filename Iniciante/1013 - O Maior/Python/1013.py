a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)


def maior_numero(a, b, c):
    if a >= b and a >= c:
        print(f"{a} eh o maior")
    else:
        if b >= a and b >= c:
            print(f"{b} eh o maior")
        else:
            print(f"{c} eh o maior")


maior_numero(a, b, c)
