def main():
    seller_name = input()
    fixed_salary = float(input())
    total_sales_month = float(input())
    COMMISSION_RATE = 0.15
    total_salary = (total_sales_month * COMMISSION_RATE) + fixed_salary
    print(f"TOTAL = R$ {total_salary:.2f}")


if __name__ == "__main__":
    main()
