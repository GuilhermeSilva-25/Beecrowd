def determinar_regiao():
    numero_consultas = int(input())

    while numero_consultas > 0:
        x_ponto_divisor, y_ponto_divisor = input().split()
        x_ponto_divisor = int(x_ponto_divisor)
        y_ponto_divisor = int(y_ponto_divisor)
        contador = 1

        while contador <= numero_consultas:
            X, Y = input().split()
            X = int(X)
            Y = int(Y)

            if X == x_ponto_divisor or Y == y_ponto_divisor:
                print("divisa")
            elif X > x_ponto_divisor and Y > y_ponto_divisor:
                print("NE")
            elif X > x_ponto_divisor and Y < y_ponto_divisor:
                print("SE")
            elif X < x_ponto_divisor and Y > y_ponto_divisor:
                print("NO")
            else:
                print("SO")

            contador += 1
        numero_consultas = int(input())


determinar_regiao()
