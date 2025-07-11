def main():
    total_distance_traveled = int(input())
    total_fuel_used = float(input())
    average_consumption = calculate_average_consumption(
        total_distance_traveled, total_fuel_used
    )
    print(f"{average_consumption:.3f} km/l")


def calculate_average_consumption(total_km, total_fuel):
    return total_km / total_fuel


if __name__ == "__main__":
    main()
