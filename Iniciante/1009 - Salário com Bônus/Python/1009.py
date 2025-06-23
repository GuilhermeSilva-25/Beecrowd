def main():
    seller_name = input()
    salary = float(input())
    total_sales = float(input())
    commission = 0.15
    total_salary = salary + (total_sales * commission)
    print(f"TOTAL = R$ {total_salary:.2f}")

if __name__ == "__main__":
    main()
