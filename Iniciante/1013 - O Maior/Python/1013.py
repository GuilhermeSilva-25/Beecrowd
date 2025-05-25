def main():
    lista = input().split()

    print(f"{numero_maior(lista)} eh o maior")


def numero_maior(l):
    l = list(map(int, l))
    l.sort()
    return l[-1]


main()
