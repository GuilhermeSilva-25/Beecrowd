def main():
    entrada = input().split()
    lista = list(map(int, entrada))

    crescente(lista)
    original(lista)


def crescente(l):
    crescente = sorted(l)

    for item in crescente:
        print(item)

    print()


def original(l):
    for item in l:
        print(item)


main()
