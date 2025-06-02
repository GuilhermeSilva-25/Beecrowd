def main():
    a = input()
    b = input()
    c = input()

    print(animal(a, b, c))


def animal(a, b, c):
    if a == "vertebrado" and b == "ave" and c == "carnivoro":
        return "aguia"
    elif a == "vertebrado" and b == "ave" and c == "onivoro":
        return "pomba"
    elif a == "vertebrado" and b == "mamifero" and c == "onivoro":
        return "homem"
    elif a == "vertebrado" and b == "mamifero" and c == "herbivoro":
        return "vaca"
    elif a == "invertebrado" and b == "inseto" and c == "hematofago":
        return "pulga"
    elif a == "invertebrado" and b == "inseto" and c == "herbivoro":
        return "lagarta"
    elif a == "invertebrado" and b == "anelideo" and c == "hematofago":
        return "sanguessuga"
    elif a == "invertebrado" and b == "anelideo" and c == "onivoro":
        return "minhoca"


main()
