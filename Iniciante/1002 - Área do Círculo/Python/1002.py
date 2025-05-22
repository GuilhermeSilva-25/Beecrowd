def main():
    pi = 3.14159
    raio = float(input())

    print(f"A={area(pi, raio):.4f}")


def area(n, r):
    return n * r**2


main()
