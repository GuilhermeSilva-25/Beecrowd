def main():
    N = int(input())

    tabuada(N)


def tabuada(n):
    i = 1
    while i <= 10:
        print(f"{i} x {n} = {i * n}")
        i += 1


main()
