def main():
    a, b, c = map(float, input().split())
    PI = 3.14159
    right_triangle_area = calculate_right_triangle_area(a, c)
    circle_area = calculate_circle_area(PI, c)
    trapezoid_area = calculate_trapezoid_area(a, b, c)
    square_area = calculate_square_area(b)
    rectangle_area = calculate_rectangle_area(a, b)
    print(f"TRIANGULO: {right_triangle_area:.3f}")
    print(f"CIRCULO: {circle_area:.3f}")
    print(f"TRAPEZIO: {trapezoid_area:.3f}")
    print(f"QUADRADO: {square_area:.3f}")
    print(f"RETANGULO: {rectangle_area:.3f}")


def calculate_right_triangle_area(base, height):
    return (base * height) / 2


def calculate_circle_area(pi, radius):
    return pi * radius**2


def calculate_trapezoid_area(base_a, base_b, height):
    return (base_a + base_b) * (height / 2)


def calculate_square_area(side):
    return side**2


def calculate_rectangle_area(side_a, side_b):
    return side_a * side_b


if __name__ == "__main__":
    main()
