def main():
    x1, y1 = input().split()
    x2, y2 = input().split()
    x1 = float(x1)
    x2 = float(x2)
    y1 = float(y1)
    y2 = float(y2)

    print(f"{distancia(x1, x2, y1, y2):.4f}")


def distancia(a, b, c, d):
    return ((b - a) ** 2 + (d - c) ** 2) ** (1 / 2)


main()
