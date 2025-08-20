def main():
    pairs = check_numbers()
    print(f"{pairs} valores pares")


def check_numbers():
    even_number_counter = 0
    for _ in range(5):
        number = int(input())
        if number % 2 == 0:
            even_number_counter += 1
    return even_number_counter


if __name__ == "__main__":
    main()
