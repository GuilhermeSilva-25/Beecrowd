def selecao_vetor():
    lista = []
    for i in range(100):
        lista.append(float(input()))

    j = 0
    while j < 100:
        if lista[j] <= 10:
            print(f"A[{j}] = {lista[j]}")
        j += 1


selecao_vetor()
