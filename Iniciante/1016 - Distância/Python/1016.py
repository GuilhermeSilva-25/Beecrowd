def main():
    distance = int(input())
    time = calculate_time(distance)
    print(f"{time} minutos")


def calculate_time(distance):
    return distance * 2


if __name__ == "__main__":
    main()
