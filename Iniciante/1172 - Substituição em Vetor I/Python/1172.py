def vetor():
    contador = 0
    lista = []
    while contador < 10:
        N = int(input())

        if N < 1:
            lista.append(1)
        else:
            lista.append(N)
        contador += 1

    for i in range(10):
        print(f"X[{i}] = {lista[i]}")
        i += 1
        
vetor()
