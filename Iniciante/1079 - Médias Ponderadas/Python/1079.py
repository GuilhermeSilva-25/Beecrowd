def media_ponderada():
    N = int(input())
    contador = 0

    while contador < N:
        v1, v2, v3 = input().split()
        v1 = float(v1)
        v2 = float(v2)
        v3 = float(v3)
        media = (v1 * 2 + v2 * 3 + v3 * 5) / (2 + 3 + 5)
        print(f"{media:.1f}")
        contador += 1


media_ponderada()
