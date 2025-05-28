def main():
    A, B, C, D = input().split()
    A = int(A)
    B = int(B)
    C = int(C)
    D = int(D)

    print(validacao(A, B, C, D))


def validacao(a, b, c, d):
    if b > c and d > a and (c + d) > (a + b) and c > 0 and d > 0 and a % 2 == 0:
        return "Valores aceitos"
    else:
        return "Valores nao aceitos"


main()
