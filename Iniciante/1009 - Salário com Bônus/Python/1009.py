def main():
    nome_vendedor = input()
    salario = float(input())
    total_vendas = float(input())

    print(f"TOTAL = R$ {salario + comissao(total_vendas):.2f}")


def comissao(a):
    return a * 0.15


main()
