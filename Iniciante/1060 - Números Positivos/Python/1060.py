def main():
    positive_values = 0
    for _ in range(6):
        value = float(input())
        if value > 0:
            positive_values += 1
    print(f"{positive_values} valores positivos")


if __name__ == "__main__":
    main()
