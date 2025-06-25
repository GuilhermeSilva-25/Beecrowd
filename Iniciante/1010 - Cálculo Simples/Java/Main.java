import java.util.Scanner;
import java.util.Locale;

public class Main {
  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    double totalValue = 0;
    for (int i = 0; i < 2; i++) {
      int code = sc.nextInt();
      int amount = sc.nextInt();
      double value = sc.nextDouble();
      totalValue += amount * value;
    }
    System.out.printf("VALOR A PAGAR: R$ %.2f%n", totalValue);
    sc.close();
  }
}
