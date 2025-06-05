def main():
    X = int(input())

    mostrar_impares(X)


def mostrar_impares(x):
    contador = 1
    while contador <= x:
        print(contador)
        contador += 2


main()
