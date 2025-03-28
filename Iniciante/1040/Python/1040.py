n1, n2, n3, n4 = input().split()
n1 = float(n1)
n2 = float(n2)
n3 = float(n3)
n4 = float(n4)

media = (n1*2 + n2*3 + n3*4 + n4) / 10
print(f'Media: {media:.1f}')

if media >= 7:
    print('Aluno aprovado.')
elif media < 5:
    print('Aluno reprovado.')
else:
    print('Aluno em exame.')
    n5 = float(input())
    print(f'Nota do exame: {n5:.1f}')
    nova_media = (n5 + media) / 2
    if nova_media >= 5:
        print('Aluno aprovado.')
        print(f'Media final: {nova_media:.1f}')
    else:
        print('Aluno reprovado.')
        print(f'Media final: {nova_media:.1f}')

