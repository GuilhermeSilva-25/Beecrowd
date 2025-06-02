def main():
    A, B = input().split()
    A = int(A)
    B = int(B)

    print(multiplos(A, B))


def multiplos(a, b):
    if a % b == 0 or b % a == 0:
        return "Sao Multiplos"
    else:
        return "Nao sao Multiplos"


main()
