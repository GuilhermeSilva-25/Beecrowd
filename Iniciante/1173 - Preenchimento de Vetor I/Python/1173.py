def preenchimento_vetor():
    contador = 10
    indice = 0
    V = int(input())
    lista = [V]

    while contador > 0:
        lista.append((lista[indice] * 2))
        contador -= 1
        indice += 1

    for i in range(10):
        print(f"N[{i}] = {lista[i]}")

preenchimento_vetor()