def main():
    idade = int(input())
    contador = 0
    soma_idade = 0

    while idade > 0:
        soma_idade += idade
        idade = int(input())
        contador += 1

    media = soma_idade / contador
    print(f"{media:.2f}")


main()
