import java.util.Scanner;
import java.util.Locale;

public class Main {
  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    String sellerName = sc.nextLine();
    double salary = sc.nextDouble();
    double totalSales = sc.nextDouble();
    double commission = 0.15;
    double totalSalary = salary + (totalSales * commission);
    System.out.printf("TOTAL = R$ %.2f%n", totalSalary);
    sc.close();
  }
}