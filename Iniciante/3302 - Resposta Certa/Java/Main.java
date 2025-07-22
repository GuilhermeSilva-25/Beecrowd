import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int numberOfQuestions = sc.nextInt();
    for (int i = 1; i <= numberOfQuestions; i++) {
      int value = sc.nextInt();
      System.out.printf("resposta %d: %d%n", i, value);
    }
    sc.close();
  }
}