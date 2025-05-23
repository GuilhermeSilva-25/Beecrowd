def main():
    numero_funcionario = int(input())
    horas_trabalhadas = int(input())
    valor_hora = float(input())

    print(
        f"NUMBER = {numero_funcionario}\nSALARY = U$ {salario(horas_trabalhadas, valor_hora):.2f}"
    )


def salario(b, c):
    return c * b


main()
