def main():
    verificador = 0
    alcool = 0
    gasolina = 0
    diesel = 0

    while verificador == 0:
        produto = int(input())

        if produto == 1:
            alcool += 1
        elif produto == 2:
            gasolina += 1
        elif produto == 3:
            diesel += 1
        elif produto == 4:
            verificador = 1

    print(f"MUITO OBRIGADO\nAlcool: {alcool}\nGasolina: {gasolina}\nDiesel: {diesel}")


main()
