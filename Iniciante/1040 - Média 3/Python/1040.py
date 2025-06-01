def main():
    entradas = input().split()
    notas = list(map(float, entradas))
    media = calculo_media(notas)
    print(f"Media: {media:.1f}")
    status = avaliacao_inicial(media)
    if status != "Aluno em exame.":
        print(status)
    else:
        print(status)
        exame(media)


def calculo_media(notas):
    return (notas[0] * 2 + notas[1] * 3 + notas[2] * 4 + notas[3]) / 10


def avaliacao_inicial(media):
    if media >= 7:
        return "Aluno aprovado."
    elif media < 5:
        return "Aluno reprovado."
    else:
        return "Aluno em exame."


def exame(media):
    nota_exame = float(input())
    print(f"Nota do exame: {nota_exame:.1f}")
    nova_media = (media + nota_exame) / 2
    if nova_media >= 5:
        print("Aluno aprovado.")
    else:
        print("Aluno reprovado.")
    print(f"Media final: {nova_media:.1f}")


main()
