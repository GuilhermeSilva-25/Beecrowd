def main():
    a, b = map(int, input().split())
    result = are_multiples(a, b)
    print(result)


def are_multiples(a, b):
    if (a != 0 and b % a == 0) or (b != 0 and a % b == 0):
        return "Sao Multiplos"
    else:
        return "Nao sao Multiplos"


if __name__ == "__main__":
    main()
