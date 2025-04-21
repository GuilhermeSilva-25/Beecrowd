def quadrado():
    N = int(input())
    contador = 1

    while contador <= N:
        if N % 2 != 0 and contador != N:
            contador += 1
        if contador % 2 == 0:
            print(f"{contador}^2 = {contador**2}")
        contador += 1


quadrado()
