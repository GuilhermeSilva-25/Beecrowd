def main():
    controle = 0
    while controle == 0:
        X, Y = input().split()
        X = int(X)
        Y = int(Y)
        if X == Y:
            controle = 1
        elif X > Y:
            print("Decrescente")
        elif Y > X:
            print("Crescente")

main()
