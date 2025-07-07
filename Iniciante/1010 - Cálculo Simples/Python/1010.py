def main():
    amount_to_pay = 0
    for _ in range(2):
        code_part_str, amount_part_str, part_value_str = input().split()
        amount_part = int(amount_part_str)
        part_value = float(part_value_str)
        amount_to_pay += amount_part * part_value
    print(f"VALOR A PAGAR: R$ {amount_to_pay:.2f}")


if __name__ == "__main__":
    main()
