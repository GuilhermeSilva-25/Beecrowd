def main():
    valor = int(input())
    print(valor)
    cedulas = [100, 50, 20, 10, 5, 2, 1]

    notas(cedulas, valor)


def notas(x, y):
    for item in x:
        quantidade_cedulas = y // item
        print(f"{quantidade_cedulas} nota(s) de R$ {item},00")
        y -= quantidade_cedulas * item


main()
