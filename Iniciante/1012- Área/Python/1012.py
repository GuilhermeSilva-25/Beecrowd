A, B, C = input().split()
A = float(A)
B = float(B)
C = float(C)
pi = 3.14159


def area_triangulo(a, c):
    print(f"TRIANGULO: {a*c/2:.3f}")


def area_circulo(p, c):
    print(f"CIRCULO: {p*c**2:.3f}")


def area_trapezio(a, b, c):
    print(f"TRAPEZIO: {((a+b)*c)/2:.3f}")


def area_quadrado(b):
    print(f"QUADRADO: {b*b:.3f}")


def area_retangulo(a, b):
    print(f"RETANGULO: {a*b:.3f}")


def calculos(a, b, c, p):
    area_triangulo(a, c)
    area_circulo(p, c)
    area_trapezio(a, b, c)
    area_quadrado(b)
    area_retangulo(a, b)

calculos(A, B, C, pi)