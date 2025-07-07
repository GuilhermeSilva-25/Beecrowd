import java.util.Locale;
import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    double amountToPay = 0;
    for (int i = 0; i < 2; i++) {
      sc.nextInt();
      int amountPart = sc.nextInt();
      double partValue = sc.nextDouble();
      amountToPay += amountPart * partValue;
    }
    System.out.printf("VALOR A PAGAR: R$ %.2f%n", amountToPay);
    sc.close();
  }
}