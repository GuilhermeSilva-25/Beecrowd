def main():
    X = int(input())
    Y = int(input())

    print(soma_impares(X, Y))


def soma_impares(x, y):
    if x >= y:
        somador = x - 1
        controle = y
    else:
        somador = y - 1
        controle = x
    soma = 0
    while somador > controle:
        if somador % 2 != 0:
            soma += somador
        somador -= 1
    return soma


main()
