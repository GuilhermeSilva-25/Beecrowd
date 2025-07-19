def main():
    INTERVAL_START = 10
    INTERVAL_END = 20
    N = int(input())
    values_in = 0
    values_out = 0
    for _ in range(N):
        value = int(input())
        if INTERVAL_START <= value <= INTERVAL_END:
            values_in += 1
        else:
            values_out += 1
    print(f"{values_in} in")
    print(f"{values_out} out")


if __name__ == "__main__":
    main()
