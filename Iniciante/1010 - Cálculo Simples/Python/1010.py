def main():
    total_value = 0
    for _ in range(2):
        item = input().split()
        code = int(item[0])
        amount = int(item[1])
        value = float(item[2])
        total_value += amount * value
    print(f"VALOR A PAGAR: R$ {total_value:.2f}")

if __name__ == "__main__":
    main()
