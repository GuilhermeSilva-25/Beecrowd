import math


def main():
    a, b, c = map(float, input().split())
    delta = calculate_delta(a, b, c)
    if delta < 0 or a == 0:
        print("Impossivel calcular")
    else:
        r1, r2 = calculate_roots(a, b, delta)
        print(f"R1 = {r1:.5f}")
        print(f"R2 = {r2:.5f}")


def calculate_delta(a, b, c):
    return b**2 - (4 * a * c)


def calculate_roots(a, b, delta):
    r1 = (-b + math.sqrt(delta)) / (2 * a)
    r2 = (-b - math.sqrt(delta)) / (2 * a)
    return r1, r2


if __name__ == "__main__":
    main()
