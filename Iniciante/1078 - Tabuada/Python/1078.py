def tabuada():
    N = int(input())
    contador = 1

    while contador <= 10:
        print(f"{contador} x {N} = {contador * N}")
        contador += 1


tabuada()
