def feedback():
    N = int(input())
    contador = 0

    while contador < N:
        K = int(input())
        contador2 = 0

        while contador2 < K:
            feedback = int(input())
            if feedback == 1:
                print("Rolien")
            elif feedback == 2:
                print("Naej")
            elif feedback == 3:
                print("Elehcim")
            elif feedback == 4:
                print("Odranoel")

            contador2 += 1

        contador += 1


feedback()
