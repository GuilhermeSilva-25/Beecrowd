def main():
    A = float(input())
    B = float(input())
    WEIGHT_A = 3.5
    WEIGHT_B = 7.5
    TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B
    average = (A * WEIGHT_A + B * WEIGHT_B) / TOTAL_WEIGHT
    print(f"MEDIA = {average:.5f}")


if __name__ == "__main__":
    main()