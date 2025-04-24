def cedulas_moedas():
    valor = float(input())
    cedulas = [100, 50, 20, 10, 5, 2]
    moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
    contador_cedulas = 0
    contador_moedas = 0
    print("NOTAS:")
    while contador_cedulas < len(cedulas):
        quantidade_cedulas = valor // cedulas[contador_cedulas]
        print(f"{quantidade_cedulas:.0f} nota(s) de R$ {cedulas[contador_cedulas]}.00")
        valor -= quantidade_cedulas * cedulas[contador_cedulas]
        contador_cedulas += 1
    print("MOEDAS:")
    while contador_moedas < len(moedas):
        quantidade_moedas = int(round(valor / moedas[contador_moedas], 2))
        print(f"{quantidade_moedas:.0f} moeda(s) de R$ {moedas[contador_moedas]:.2f}")
        valor -= quantidade_moedas * moedas[contador_moedas]
        contador_moedas += 1


cedulas_moedas()
