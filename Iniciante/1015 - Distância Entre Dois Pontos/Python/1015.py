import math


def main():
    x1, y1 = map(float, input().split())
    x2, y2 = map(float, input().split())
    distance = calculate_distance(x1, x2, y1, y2)
    print(f"{distance:.4f}")


def calculate_distance(x1, x2, y1, y2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)


if __name__ == "__main__":
    main()
