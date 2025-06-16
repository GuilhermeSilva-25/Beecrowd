def main():
    N = int(input())
    contador = 0

    while contador < N:
        X, Y = input().split()
        X = int(X)
        Y = int(Y)

        if Y == 0:
            print("divisao impossivel")
        else:
            divisao = X / Y
            print(f"{divisao:.1f}")

        contador += 1


main()
