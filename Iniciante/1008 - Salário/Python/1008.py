def main():
    employee_number = int(input())
    hours_worked = int(input())
    hourly_rate = float(input())
    salary = hours_worked * hourly_rate
    print(f"NUMBER = {employee_number}\nSALARY = U$ {salary:.2f}")


if __name__ == "__main__":
    main()
