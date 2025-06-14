def main():
    senha_correta = 2002
    validador = 0

    while validador != 1:
        senha = int(input())
        if senha == senha_correta:
            print("Acesso Permitido")
            validador = 1
        else:
            print("Senha Invalida")


main()
