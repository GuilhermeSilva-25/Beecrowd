tempoViagem = int(input())
velocidadeMedia = int(input())


def distancia_percorrida(a, b):
    return a * b


def litros_necessarios(a, b):
    print(f"{distancia_percorrida(a, b) / 12:.3f}")


def gasto_combustivel(a, b):
    litros_necessarios(a, b)


gasto_combustivel(tempoViagem, velocidadeMedia)
