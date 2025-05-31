def main():
    lista = entradas()
    print(f"{positivo(lista)} valores positivos")


def entradas():
    lista = []
    for entrada in range(6):
        valor = float(input())
        lista.append(valor)
    return lista


def positivo(l):
    positivos = 0
    for item in l:
        if item >= 0:
            positivos += 1
    return positivos


main()
