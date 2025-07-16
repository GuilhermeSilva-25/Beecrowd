def main():
    duration_in_seconds = int(input())
    SECONDS_PER_HOUR = 3600
    SECONDS_PER_MINUTE = 60
    hours, remainder_seconds = divmod(duration_in_seconds, SECONDS_PER_HOUR)
    minutes, seconds = divmod(remainder_seconds, SECONDS_PER_MINUTE)
    print(f"{hours}:{minutes}:{seconds}")


if __name__ == "__main__":
    main()
