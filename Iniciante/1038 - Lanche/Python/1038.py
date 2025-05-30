def main():
    entrada = input().split()
    compra = list(map(int, entrada))
    cardapio = produtos()

    print(f"Total: R$ {conta(cardapio, compra):.2f}")


def produtos():
    cardapio = [
        {"cd": 1, "especificacao": "Cachorro Quente", "preco": 4.00},
        {"cd": 2, "especificacao": "X-Salada", "preco": 4.50},
        {"cd": 3, "especificacao": "X-Bacon", "preco": 5.00},
        {"cd": 4, "especificacao": "Torrada Simples", "preco": 2.00},
        {"cd": 5, "especificacao": "Refrigerante", "preco": 1.50},
    ]

    return cardapio


def conta(a, b):
    for item in a:
        if b[0] == item["cd"]:
            return item["preco"] * b[1]


main()
