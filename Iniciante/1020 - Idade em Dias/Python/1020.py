def main():
    idade_dias = int(input())

    print(conversao(idade_dias))


def conversao(x):
    anos = x // 365
    x -= anos * 365
    mes = x // 30
    x -= mes * 30
    dia = x

    return f"{anos} ano(s)\n{mes} mes(es)\n{dia} dia(s)"


main()
