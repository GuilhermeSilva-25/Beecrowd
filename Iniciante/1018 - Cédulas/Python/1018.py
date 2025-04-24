def cedulas():
    valor = int(input())
    print(valor)
    cedulas = [100, 50, 20, 10, 5, 2, 1]
    contador = 0

    while contador < len(cedulas):
        quantidade_cedulas = valor // cedulas[contador]
        print(f"{quantidade_cedulas} nota(s) de R$ {cedulas[contador]},00")
        valor -= quantidade_cedulas * cedulas[contador]
        contador += 1

cedulas()
