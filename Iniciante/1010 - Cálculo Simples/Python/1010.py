def main():
    valor_total = 0

    for i in range(2):
        item = input().split()
        codigo = int(item[0])
        quantidade = int(item[1])
        valor = float(item[2])
        valor_total += quantidade * valor

    print(f"VALOR A PAGAR: R$ {valor_total:.2f}")


main()
