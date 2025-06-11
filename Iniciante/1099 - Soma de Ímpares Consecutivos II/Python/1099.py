def main():
    N = int(input())
    soma_impares(N)


def soma_impares(n):
    contador = 0
    while contador < n:
        X, Y = input().split()
        X = int(X)
        Y = int(Y)
        maior = 0
        menor = 0
        soma = 0

        if X > Y:
            maior = X
            menor = Y
        else:
            maior = Y
            menor = X

        somador = maior - 1

        while somador > menor:
            if somador % 2 != 0:
                soma += somador
            somador -= 1

        contador += 1
        print(soma)


main()