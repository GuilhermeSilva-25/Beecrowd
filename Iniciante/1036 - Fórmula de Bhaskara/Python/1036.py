def main():
    A, B, C = input().split()
    A = float(A)
    B = float(B)
    C = float(C)
    valor_delta = 0

    if A == 0:
        print("Impossivel calcular")
    else:
        valor_delta = delta(A, B, C)
        if valor_delta < 0:
            print("Impossivel calcular")
        else:
            print(f"R1 = {bhaskara(A, B, valor_delta)[0]:.5f}")
            print(f"R2 = {bhaskara(A, B, valor_delta)[1]:.5f}")


def delta(a, b, c):
    return (b**2) - (4 * a * c)


def bhaskara(a, b, d):
    R1 = (-b + (d**0.5)) / (2 * a)
    R2 = (-b - (d**0.5)) / (2 * a)

    return R1, R2


main()
