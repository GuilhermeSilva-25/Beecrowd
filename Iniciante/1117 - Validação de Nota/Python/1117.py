def main():
    verificador = 0
    media = 0
    contador = 0
    while verificador == 0:
        while contador < 2:
            nota = float(input())

            if 0 <= nota <= 10:
                media += nota
                contador += 1
            else:
                print("nota invalida")
        media /= 2
        print(f"media = {media:.2f}")
        verificador = 1

main()