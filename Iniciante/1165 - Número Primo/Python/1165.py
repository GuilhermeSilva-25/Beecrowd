def numero_primo():
    N = int(input())
    contador = 0

    while contador < N:
        X = int(input())
        quantidade_divisores = 0
        divisor = 1

        while divisor <= X:
            if X % divisor == 0:
                quantidade_divisores += 1
            divisor += 1
        if quantidade_divisores == 2:
            print(f"{X} eh primo")
        else:
            print(f"{X} nao eh primo")
        contador += 1


numero_primo()
