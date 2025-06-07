def main():
    N = int(input())

    quadrado(N)


def quadrado(n):
    i = 1

    while i <= n:
        if n % 2 != 0 and i != n:
            i += 1
        if i % 2 == 0:
            print(f"{i}^2 = {i ** 2}")
        i += 1


main()
