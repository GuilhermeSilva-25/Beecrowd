def main():
    N = int(input())

    print(conversao(N))


def conversao(n):
    horas = 0
    minutos = 0
    segundos = 0

    horas = n // 3600
    minutos = (n % 3600) // 60
    segundos = (n % 3600) % 60

    return f"{horas}:{minutos}:{segundos}"


main()
