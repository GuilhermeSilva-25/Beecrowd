a = int(input())
b = int(input())
c = int(input())
d = int(input())
e = int(input())


def verificador_par():

    contador = 0

    if a % 2 == 0:
        contador += 1
    if b % 2 == 0:
        contador += 1
    if c % 2 == 0:
        contador += 1
    if d % 2 == 0:
        contador += 1
    if e % 2 == 0:
        contador += 1

    return contador


print(f"{verificador_par()} valores pares")
