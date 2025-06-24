def main():
    travel_time = int(input())
    average_speed = int(input())
    consumption = 12
    distance_traveled = travel_time * average_speed
    fuel_spent = distance_traveled / consumption
    print(f"{fuel_spent:.3f}")


if __name__ == "__main__":
    main()
