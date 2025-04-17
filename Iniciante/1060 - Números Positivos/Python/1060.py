a = float(input())
b = float(input())
c = float(input())
d = float(input())
e = float(input())
f = float(input())


def verificador_positivo():

    contador = 0

    if a > 0:
        contador += 1
    if b > 0:
        contador += 1
    if c > 0:
        contador += 1
    if d > 0:
        contador += 1
    if e > 0:
        contador += 1
    if f > 0:
        contador += 1

    return contador


print(f"{verificador_positivo()} valores positivos")
