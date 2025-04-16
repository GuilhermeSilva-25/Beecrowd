a = int(input())
b = int(input())
c = int(input())
d = int(input())
e = int(input())


def verificador():

    contador_par = 0
    contador_impar = 0
    contador_positivo = 0
    contador_negativo = 0

    if a % 2 == 0:
        contador_par += 1
    else:
        contador_impar += 1

    if a > 0:
        contador_positivo += 1
    elif a < 0 and a != 0:
        contador_negativo += 1

    if b % 2 == 0:
        contador_par += 1
    else:
        contador_impar += 1

    if b > 0:
        contador_positivo += 1
    elif b < 0 and b != 0:
        contador_negativo += 1

    if c % 2 == 0:
        contador_par += 1
    else:
        contador_impar += 1

    if c > 0:
        contador_positivo += 1
    elif c < 0 and c != 0:
        contador_negativo += 1

    if d % 2 == 0:
        contador_par += 1
    else:
        contador_impar += 1

    if d > 0:
        contador_positivo += 1
    elif d < 0 and d != 0:
        contador_negativo += 1

    if e % 2 == 0:
        contador_par += 1
    else:
        contador_impar += 1

    if e > 0:
        contador_positivo += 1
    elif e < 0 and e != 0:
        contador_negativo += 1

    print(f"{contador_par} valor(es) par(es)")
    print(f"{contador_impar} valor(es) impar(es)")
    print(f"{contador_positivo} valor(es) positivo(s)")
    print(f"{contador_negativo} valor(es) negativo(s)")

verificador()
