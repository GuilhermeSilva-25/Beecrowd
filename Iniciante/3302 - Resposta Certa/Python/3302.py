def main():
    number_of_questions = int(input())
    for item in range(1, number_of_questions + 1):
        value = int(input())
        print(f"resposta {item}: {value}")


if __name__ == "__main__":
    main()
