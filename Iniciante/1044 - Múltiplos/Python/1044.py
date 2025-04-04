A, B = input().split()
A = int(A)
B = int(B)


def multiplos(a, b):
    if a % b == 0 or b % a == 0:
        print("Sao Multiplos")
    else:
        print("Nao sao Multiplos")


multiplos(A, B)
