def main():
    A = float(input())
    B = float(input())
    C = float(input())

    print(f"MEDIA = {media(A, B, C):.1f}")


def media(x, y, z):
    return (x * 2 + y * 3 + z * 5) / 10


main()
