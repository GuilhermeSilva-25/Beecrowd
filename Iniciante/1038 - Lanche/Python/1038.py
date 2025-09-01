def main():
    price_table = {1: 4.00, 2: 4.50, 3: 5.00, 4: 2.00, 5: 1.50}

    item, amount = map(int, input().split())
    price = price_table[item]
    total = amount * price
    print(f"Total: R$ {total:.2f}")


if __name__ == "__main__":
    main()
