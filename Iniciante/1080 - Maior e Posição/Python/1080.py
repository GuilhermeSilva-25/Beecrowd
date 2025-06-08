def main():
    numero = 0
    maior_valor = 0
    posicao = 0
    contador = 1

    while contador <= 100:
        numero = int(input())

        if numero > maior_valor:
            maior_valor = numero
            posicao = contador

        contador += 1

    print(maior_valor)
    print(posicao)


main()
