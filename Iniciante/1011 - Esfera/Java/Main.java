import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    double radiusSphere = sc.nextDouble();
    final double PI = 3.14159;
    double volume = (4.0 / 3.0) * PI * Math.pow(radiusSphere, 3);
    System.out.printf("VOLUME = %.3f%n", volume);
    sc.close();
  }
}