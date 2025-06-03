def main():
    lista = []
    for i in range(5):
        entrada = int(input())
        lista.append(entrada)

    print(f"{verificador_par(lista)} valores pares")


def verificador_par(l):
    contador = 0
    for i in l:
        if i % 2 == 0:
            contador += 1
    return contador


main()
