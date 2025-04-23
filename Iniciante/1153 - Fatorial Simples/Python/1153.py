def fatorial():
    N = int(input())
    contador = N - 1
    fatorial = N

    while contador > 1:
        fatorial *= contador
        contador -= 1

    return fatorial


print(fatorial())
