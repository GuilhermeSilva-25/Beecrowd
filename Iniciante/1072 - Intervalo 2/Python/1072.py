def main():
    N = int(input())

    print(in_or_out(N))


def in_or_out(n):
    dentro = 0
    fora = 0

    for i in range(n):
        X = int(input())
        if 10 <= X <= 20:
            dentro += 1
        else:
            fora += 1

    return f"{dentro} in\n{fora} out"


main()
