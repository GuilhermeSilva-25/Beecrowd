import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int valueOne = sc.nextInt();
    int valueTwo = sc.nextInt();
    int product = valueOne * valueTwo;
    System.out.printf("PROD = %d%n", product);
    sc.close();
  }
}