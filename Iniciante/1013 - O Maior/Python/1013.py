def main():
    values_str = input().split()
    values_num = list(map(int, values_str))
    larger_number = higherValue(values_num)
    print(f"{larger_number} eh o maior")


def higherValue(values):
    higher = max(values)
    return higher


if __name__ == "__main__":
    main()
