def main():
    parada = 0
    while parada == 0:
        X, Y = input().split()
        X = int(X)
        Y = int(Y)

        if X == 0 or Y == 0:
            parada = 1
        elif X > 0 and Y > 0:
            print("primeiro")
        elif X > 0 and Y < 0:
            print("quarto")
        elif X < 0 and Y < 0:
            print("terceiro")
        elif X < 0 and Y > 0:
            print("segundo")


main()
