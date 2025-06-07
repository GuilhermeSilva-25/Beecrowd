def main():
    N = int(input())

    media_ponderada(N)


def media_ponderada(n):
    i = 0

    while i < n:
        v1, v2, v3 = input().split()
        v1 = float(v1)
        v2 = float(v2)
        v3 = float(v3)

        media = (v1 * 2 + v2 * 3 + v3 * 5) / 10
        print(f"{media:.1f}")
        i += 1


main()
