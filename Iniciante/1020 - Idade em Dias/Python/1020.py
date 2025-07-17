def main():
    person_age = int(input())
    DAYS_PER_YEAR = 365
    DAYS_PER_MONTH = 30
    years, remaining_days = divmod(person_age, DAYS_PER_YEAR)
    months, days = divmod(remaining_days, DAYS_PER_MONTH)
    print(f"{years} ano(s)\n{months} mes(es)\n{days} dia(s)")


if __name__ == "__main__":
    main()
