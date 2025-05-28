def main():
    valor = float(input())
    lista_cedulas = [100, 50, 20, 10, 5, 2]
    lista_moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

    sobra = cedulas(valor, lista_cedulas)
    moedas(sobra, lista_moedas)


def cedulas(v, l):
    print("NOTAS:")
    for cedula in l:
        quantidade_cedulas = v // cedula
        print(f"{quantidade_cedulas:.0f} nota(s) de R$ {cedula}.00")
        v -= quantidade_cedulas * cedula
    return v


def moedas(v, l):
    print("MOEDAS:")
    for moeda in l:
        quantidade_moedas = int(round(v / moeda, 2))
        print(f"{quantidade_moedas:.0f} moeda(s) de R$ {moeda}")
        v -= quantidade_moedas * moeda


main()
