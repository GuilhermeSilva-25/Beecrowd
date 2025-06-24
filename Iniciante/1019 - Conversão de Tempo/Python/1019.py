def main():
    N = int(input())
    TOTAL_SECONDS_ONE_HOUR = 3600
    TOTAL_MINUTES_ONE_HOUR = 60
    hours = N // TOTAL_SECONDS_ONE_HOUR
    minutes = (N % TOTAL_SECONDS_ONE_HOUR) // TOTAL_MINUTES_ONE_HOUR
    seconds = (N % TOTAL_SECONDS_ONE_HOUR) % TOTAL_MINUTES_ONE_HOUR
    print(f"{hours}:{minutes}:{seconds}")


if __name__ == "__main__":
    main()
