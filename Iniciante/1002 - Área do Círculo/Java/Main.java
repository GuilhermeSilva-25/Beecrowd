import java.util.Scanner;
import java.util.Locale;

public class Main {
  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    final double PI = 3.14159;
    double radius = sc.nextDouble();
    double area = PI * (radius * radius);
    System.out.printf("A=%.4f%n", area);
    sc.close();
  }
}