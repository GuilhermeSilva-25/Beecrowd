import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int km = sc.nextInt();
    int minutesPerKm = 2;
    int time = km * minutesPerKm;
    System.out.printf("%d minutos%n", time);
    sc.close();
  }
}