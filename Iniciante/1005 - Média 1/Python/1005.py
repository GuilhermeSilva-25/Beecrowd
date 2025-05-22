def main():
    A = float(input())
    B = float(input())

    print(f"MEDIA = {media(A, B):.5f}")


def media(x, y):
    return (x * 3.5 + y * 7.5) / 11


main()
