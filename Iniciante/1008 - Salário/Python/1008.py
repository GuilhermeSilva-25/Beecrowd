num_fun = int(input())
horas_trab = int(input())
valor_hora = float(input())


def salario(a, b, c):
  print(f"NUMBER = {a}\nSALARY = U$ {c * b:.2f}")

salario(num_fun, valor_hora, horas_trab)