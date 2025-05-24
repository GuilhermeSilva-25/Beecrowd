def main():
    A, B, C = input().split()
    A = float(A)
    B = float(B)
    C = float(C)
    pi = 3.14159

    print(f"TRIANGULO: {area_triangulo(A, C):.3f}")
    print(f"CIRCULO: {area_circulo(pi, C):.3f}")
    print(f"TRAPEZIO: {area_trapezio(A, B, C):.3f}")
    print(f"QUADRADO: {area_quadrado(B):.3f}")
    print(f"RETANGULO: {area_retangulo(A, B):.3f}")


def area_triangulo(a, c):
    return a * c / 2


def area_circulo(p, c):
    return p * c**2


def area_trapezio(a, b, c):
    return ((a + b) * c) / 2


def area_quadrado(b):
    return b * b


def area_retangulo(a, b):
    return a * b


main()
