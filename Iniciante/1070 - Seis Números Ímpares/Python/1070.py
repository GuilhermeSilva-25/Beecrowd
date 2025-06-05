def main():
    X = int(input())

    valores_impares(X)


def valores_impares(x):
    i = 0

    while i < 6:
        if x % 2 == 0:
            x += 1
        print(x)
        x += 2
        i += 1


main()
