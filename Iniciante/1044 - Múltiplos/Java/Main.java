import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    String result = areMultiples(a, b);
    System.out.println(result);
    sc.close();
  }

  public static String areMultiples(int a, int b) {
    if (b % a == 0 || a % b == 0) {
      return "Sao Multiplos";
    } else {
      return "Nao sao Multiplos";
    }
  }
}