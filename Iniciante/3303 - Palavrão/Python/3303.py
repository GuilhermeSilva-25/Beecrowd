def main():
    word = input()
    message = "palavrao" if len(word) >= 10 else "palavrinha"
    print(message)


if __name__ == "__main__":
    main()
