cod, qt = input().split()
cod = int(cod)
qt = int(qt)

if cod == 1:
    print(f'Total: R$ {qt*4:.2f}')
elif cod == 2:
    print(f'Total: R$ {qt*4.5:.2f}')
elif cod == 3:
    print(f'Total: R$ {qt*5:.2f}')
elif cod == 4:
    print(f'Total: R$ {qt*2:.2f}')
elif cod == 5:
    print(f'Total: R$ {qt*1.5:.2f}')