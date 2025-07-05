def main():
    employee_number = int(input())
    hours_worked = int(input())
    hour_value = float(input())
    salary = hour_value * hours_worked
    print(f"NUMBER = {employee_number}\nSALARY = U$ {salary:.2f}")


if __name__ == "__main__":
    main()