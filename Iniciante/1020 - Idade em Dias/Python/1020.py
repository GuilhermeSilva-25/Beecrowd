def idade_em_dias():
    idade_dias = int(input())

    anos = idade_dias // 365
    idade_dias -= anos * 365
    mes = idade_dias // 30
    idade_dias -= mes * 30
    dia = idade_dias
    print(f"{anos} ano(s)\n{mes} mes(es)\n{dia} dia(s)")


idade_em_dias()
