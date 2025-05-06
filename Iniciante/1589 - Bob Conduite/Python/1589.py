def conduite():
    T = int(input())
    contador = 0

    while contador < T:
        R1, R2 = input().split()
        R1 = int(R1)
        R2 = int(R2)

        print(R1 + R2)
        contador += 1


conduite()
