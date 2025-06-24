import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    int travelTime = sc.nextInt();
    int averageSpeed = sc.nextInt();
    double consumption = 12;
    int distanceTraveled = travelTime * averageSpeed;
    double fuelSpent = distanceTraveled / consumption;
    System.out.printf("%.3f%n", fuelSpent);
    sc.close();
  }
}