def main():
    A = float(input())
    B = float(input())
    C = float(input())
    weight_A = 2
    weight_B = 3
    weight_C = 5
    weight_total = weight_A + weight_B + weight_C
    mean = (A * weight_A + B * weight_B + C * weight_C) / weight_total
    print(f"MEDIA = {mean:.1f}")


if __name__ == "__main__":
    main()
