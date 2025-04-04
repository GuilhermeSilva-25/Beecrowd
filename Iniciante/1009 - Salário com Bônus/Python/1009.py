nome_vendedor = input()
salario = float(input())
total_vendas = float(input())


def comissao(a):
    return a * 0.15


def salario_total(b, c):
    print(f"TOTAL = R$ {b + comissao(c):.2f}")


salario_total(salario, total_vendas)
