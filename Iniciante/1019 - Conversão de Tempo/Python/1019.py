N = int(input())


def conversao():
    horas = 0
    minutos = 0
    segundos = 0

    horas = N // 3600
    minutos = (N % 3600) // 60
    segundos = (N % 3600) % 60

    return f"{horas}:{minutos}:{segundos}"


print(conversao())
