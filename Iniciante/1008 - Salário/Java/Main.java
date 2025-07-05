import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    int employeeNumber = sc.nextInt();
    int hoursWorked = sc.nextInt();
    double hourValue = sc.nextDouble();
    double salary = hourValue * hoursWorked;
    System.out.printf("NUMBER = %d%nSALARY = U$ %.2f%n", employeeNumber, salary);
    sc.close();
  }
}