def main():
    X = int(input())
    Y = float(input())

    print(f"{consumo(X, Y):.3f} km/l")


def consumo(a, b):
    return a / b


main()
