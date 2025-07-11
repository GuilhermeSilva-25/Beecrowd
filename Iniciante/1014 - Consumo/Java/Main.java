import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    int totalDistanceTraveled = sc.nextInt();
    double totalFuelUsed = sc.nextDouble();
    double averageConsumption = calculateAverageConsumption(totalDistanceTraveled, totalFuelUsed);
    System.out.printf("%.3f km/l%n", averageConsumption);
    sc.close();
  }

  public static double calculateAverageConsumption(int totalKm, double totalFuel) {
    return totalKm / totalFuel;
  }
}