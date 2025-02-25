nome_vendedor = input()
salario = float(input())
total_vendas = float(input())
comissao = total_vendas * 0.15
total = salario + comissao
print(f'TOTAL = R$ {total:.2f}')
