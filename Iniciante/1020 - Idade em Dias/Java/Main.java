import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int personAge = sc.nextInt();
    final int DAYS_PER_YEAR = 365;
    final int DAYS_PER_MONTH = 30;
    int years = personAge / DAYS_PER_YEAR;
    int remainingDays = personAge % DAYS_PER_YEAR;
    int months = remainingDays / DAYS_PER_MONTH;
    int days = remainingDays % DAYS_PER_MONTH;
    System.out.printf("%d ano(s)%n%d mes(es)%n%d dia(s)%n", years, months, days);
    sc.close();
  }
}
