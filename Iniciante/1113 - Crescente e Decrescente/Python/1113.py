def crescente_decrescente():
    X, Y = input().split()
    X = int(X)
    Y = int(Y)
    while X != Y:
        if X > Y:
            print("Decrescente")
        elif Y > X:
            print("Crescente")

        X, Y = input().split()
        X = int(X)
        Y = int(Y)


crescente_decrescente()
