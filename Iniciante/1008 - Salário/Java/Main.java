import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int employeeNumber = sc.nextInt();
    int hoursWorked = sc.nextInt();
    double hourlyRate = sc.nextDouble();
    double salary = hoursWorked * hourlyRate;
    System.out.printf("NUMBER = %d%nSALARY = U$ %.2f%n", employeeNumber, salary);
    sc.close();
  }
}