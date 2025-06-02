def main():
    x, y = input().split()
    x = float(x)
    y = float(y)

    print(quadrante(x, y))


def quadrante(x, y):
    if x == 0 and y == 0:
        return "Origem"
    elif x > 0 and y > 0:
        return "Q1"
    elif x > 0 and y < 0:
        return "Q4"
    elif x < 0 and y > 0:
        return "Q2"
    elif x < 0 and y < 0:
        return "Q3"
    elif x == 0 and y != 0:
        return "Eixo Y"
    elif y == 0 and x != 0:
        return "Eixo X"


main()
