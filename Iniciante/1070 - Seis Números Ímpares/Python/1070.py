def valores_impares():
    X = int(input())
    contador = 0

    while contador < 6:
        if X % 2 == 0:
            X += 1
        print(X)
        X += 2
        contador += 1


valores_impares()
