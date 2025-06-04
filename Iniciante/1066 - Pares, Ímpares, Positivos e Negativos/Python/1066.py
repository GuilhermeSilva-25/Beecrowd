def main():
    lista = []
    for i in range(5):
        entrada = int(input())
        lista.append(entrada)

    verificador(lista)


def verificador(l):
    contador_par = 0
    contador_impar = 0
    contador_positivo = 0
    contador_negativo = 0

    for i in l:
        if i % 2 == 0:
            contador_par += 1
        elif i % 2 != 0:
            contador_impar += 1

        if i > 0:
            contador_positivo += 1
        elif i < 0 and i != 0:
            contador_negativo += 1

    print(f"{contador_par} valor(es) par(es)")
    print(f"{contador_impar} valor(es) impar(es)")
    print(f"{contador_positivo} valor(es) positivo(s)")
    print(f"{contador_negativo} valor(es) negativo(s)")


main()
