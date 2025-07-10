import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    int c = sc.nextInt();
    int largerNumber = higherValue(a, b, c);
    System.out.printf("%d eh o maior%n", largerNumber);
    sc.close();
  }

  public static int higherValue(int a, int b, int c) {
    int higher = Math.max(a, Math.max(b, c));
    return higher;
  }
}
