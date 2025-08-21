import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int pairs = checkNumbers(sc);
    System.out.printf("%d valores pares%n", pairs);
    sc.close();
  }

  public static int checkNumbers(Scanner sc) {
    int evenNumberCounter = 0;
    for (int i = 0; i < 5; i++) {
      int number = sc.nextInt();
      if (number % 2 == 0) {
        evenNumberCounter++;
      }
    }
    return evenNumberCounter;
  }
}