def main():
    CORRECT_PASSWORD = 2002
    while True:
      password = int(input())
      if password == CORRECT_PASSWORD:
         print("Acesso Permitido")
         break
      else:
         print("Senha Invalida")


if __name__ == "__main__":
   main()
