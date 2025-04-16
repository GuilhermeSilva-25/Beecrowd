cod, qt = input().split()
cod = int(cod)
qt = int(qt)


def conta():

    if cod == 1:
        return f"Total: R$ {qt*4:.2f}"
    elif cod == 2:
        return f"Total: R$ {qt*4.5:.2f}"
    elif cod == 3:
        return f"Total: R$ {qt*5:.2f}"
    elif cod == 4:
        return f"Total: R$ {qt*2:.2f}"
    elif cod == 5:
        return f"Total: R$ {qt*1.5:.2f}"

print(conta())