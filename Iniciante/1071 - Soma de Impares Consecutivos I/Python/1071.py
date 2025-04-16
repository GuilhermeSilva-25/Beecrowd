def soma_impares():
    X = int(input())
    Y = int(input())

    somador = X - 1

    soma = 0
    while somador > Y:
        if somador % 2 != 0:
            soma += somador
        somador -= 1
    return soma


print(soma_impares())
