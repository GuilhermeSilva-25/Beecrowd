import java.util.Locale;
import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    String sellerName = sc.nextLine();
    double fixedSalary = sc.nextDouble();
    double totalSalesMonth = sc.nextDouble();
    final double COMMISSION_RATE = 0.15;
    double totalSalary = (totalSalesMonth * COMMISSION_RATE) + fixedSalary;
    System.out.printf("TOTAL = R$ %.2f%n", totalSalary);
    sc.close();
  }
}