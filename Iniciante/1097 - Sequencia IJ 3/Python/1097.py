def main():
    I = 1
    J_inicial = 7
    while I <= 9:
        contador = 1
        J = J_inicial
        while contador <= 3:
            print(f"I={I} J={J}")
            J -= 1
            contador += 1
        I += 2
        J_inicial += 2
        contador = 1


main()
