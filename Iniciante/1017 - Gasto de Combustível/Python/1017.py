tempoViagem = int(input())
velocidadeMedia = int(input())
distanciaPercorrida = velocidadeMedia * tempoViagem
litrosNecessarios = distanciaPercorrida / 12
print(f"{litrosNecessarios:.3f}")