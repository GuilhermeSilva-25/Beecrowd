def main():
    value = int(input())
    print(value)
    banknotes = [100, 50, 20, 10, 5, 2, 1]
    necessary_banknotes(value, banknotes)


def necessary_banknotes(value, banknotes):
    for item in banknotes:
        amount_banknotes = value // item
        print(f"{amount_banknotes} nota(s) de R$ {item},00")
        value %= item


if __name__ == "__main__":
    main()
