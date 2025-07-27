def main():
    real_str, cents_str = input().split('.')
    value_in_cents = int(real_str) * 100 + int(cents_str)
    banknotes_in_cents = [10000, 5000, 2000, 1000, 500, 200]
    coins_in_cents = [100, 50, 25, 10, 5, 1]
    leftover = calculation_banknotes(value_in_cents, banknotes_in_cents)
    calculation_coins(leftover, coins_in_cents)


def print_out(text):
    print(text)


def calculation_banknotes(value, banknotes_in_cents):
    print_out("NOTAS:")
    for banknote in banknotes_in_cents:
        amount_banknotes = value // banknote
        print_out(f"{amount_banknotes} nota(s) de R$ {banknote/100:.2f}")
        value %= banknote
    return value


def calculation_coins(value, coins_in_cents):
    print_out("MOEDAS:")
    for coin in coins_in_cents:
        amount_coins = value // coin
        print_out(f"{amount_coins} moeda(s) de R$ {coin/100:.2f}")
        value %= coin


if __name__ == "__main__":
    main()
