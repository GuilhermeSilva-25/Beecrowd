def tomadas():
    T1, T2, T3, T4 = input().split()
    T1 = int(T1)
    T2 = int(T2)
    T3 = int(T3)
    T4 = int(T4)

    numero_max_aparelhos = (T1 + T2 + T3 + T4) - 3
    print(numero_max_aparelhos)


tomadas()
