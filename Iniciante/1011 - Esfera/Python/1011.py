def main():
    raio = float(input())
    pi = 3.14159

    print(f"VOLUME = {volume(raio, pi):.3f}")


def volume(a, b):
    return (4.0 / 3) * b * (a**3)


main()
