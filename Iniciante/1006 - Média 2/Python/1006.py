def main():
    A = float(input())
    B = float(input())
    C = float(input())
    WEIGHT_A = 2
    WEIGHT_B = 3
    WEIGHT_C = 5
    TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C
    average = (A * WEIGHT_A + B * WEIGHT_B + C * WEIGHT_C) / TOTAL_WEIGHT
    print(f"MEDIA = {average:.1f}")


if __name__ == "__main__":
    main()
