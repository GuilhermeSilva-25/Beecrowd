def main():
    FUEL_EFFICIENCY = 12  # 12 km per liter
    travel_time = int(input()) # in hours
    average_speed = int(input()) # km per hours
    fuel_required = calculate_fuel_required(FUEL_EFFICIENCY, travel_time, average_speed)
    print(f"{fuel_required:.3f}")


def calculate_fuel_required(FUEL_EFFICIENCY, travel_time, average_speed):
    return (travel_time * average_speed) / FUEL_EFFICIENCY


if __name__ == "__main__":
    main()
