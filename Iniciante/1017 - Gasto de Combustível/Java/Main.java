import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    final int FUEL_EFFICIENCY = 12; // 12 km per liter
    int travelTime = sc.nextInt(); // in hours
    int averageSpeed = sc.nextInt(); // km per hours
    double fuelRequired = calculateFuelRequired(FUEL_EFFICIENCY, travelTime, averageSpeed);
    System.out.printf("%.3f%n", fuelRequired);
    sc.close();
  }

  public static double calculateFuelRequired(int fuelEfficiency, int travelTime, int averageSpeed) {
    return (double) (travelTime * averageSpeed) / fuelEfficiency;
  }
}