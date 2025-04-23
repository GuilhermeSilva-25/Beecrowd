def media_idades():
    idade = int(input())
    contador = 0
    soma_idade = 0

    while idade > 0:
        soma_idade += idade
        idade = int(input())
        contador += 1

    media = soma_idade / contador
    return f"{media:.2f}"


print(media_idades())