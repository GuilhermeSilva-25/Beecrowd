def alunos():
    while True:
        try:
            n = int(input())
            epr = 0
            ehd = 0
            intrusos = 0

            while n > 0:
                matricula, sigla = input().split()

                if sigla == "EPR":
                    epr += 1
                elif sigla == "EHD":
                    ehd += 1
                else:
                    intrusos += 1

                n -= 1

            print(f"EPR: {epr}\nEHD: {ehd}\nINTRUSOS: {intrusos}")
        except EOFError:
            break


alunos()
