def main():
    I = 1
    J = 7
    while I <= 9:
        contador = 1
        while contador <= 3:
            print(f"I={I} J={J}")
            J -= 1
            contador += 1
        I += 2
        J = 7
        contador = 1


main()
