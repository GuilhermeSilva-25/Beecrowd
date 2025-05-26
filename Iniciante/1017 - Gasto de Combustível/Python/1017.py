def main():
    tempo_viagem = int(input())
    velocidade_media = int(input())
    consumo = 12

    distancia = distancia_percorrida(tempo_viagem, velocidade_media)

    print(f"{gasto_combustivel(distancia, consumo):.3f}")


def distancia_percorrida(a, b):
    return a * b


def gasto_combustivel(x, y):
    return x / y


main()
