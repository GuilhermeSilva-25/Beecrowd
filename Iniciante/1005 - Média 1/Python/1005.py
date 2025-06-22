def main():
    A = float(input())
    B = float(input())
    weight_A = 3.5
    weight_B = 7.5
    weight_total = weight_A + weight_B
    mean = (A * weight_A + B * weight_B) / weight_total
    print(f"MEDIA = {mean:.5f}")

if __name__ == "__main__":
    main()
