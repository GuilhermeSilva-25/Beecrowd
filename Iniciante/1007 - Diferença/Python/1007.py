def main():
    A = int(input())
    B = int(input())
    C = int(input())
    D = int(input())

    print(f"DIFERENCA = {diferenca(A, B, C, D)}")


def diferenca(x, y, z, w):
    return x * y - z * w


main()
