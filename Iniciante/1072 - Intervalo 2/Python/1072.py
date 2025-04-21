def in_or_out():
    N = int(input())
    contador = 0
    dentro = 0
    fora = 0

    while contador < N:
        X = int(input())
        if 10 <= X <= 20:
            dentro += 1
        else:
            fora += 1
        contador += 1

    print(f"{dentro} in\n{fora} out")


in_or_out()
