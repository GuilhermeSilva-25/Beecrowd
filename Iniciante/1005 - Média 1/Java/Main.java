import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    double A = sc.nextDouble();
    double B = sc.nextDouble();
    double weightA = 3.5;
    double weightB = 7.5;
    double weightTotal = weightA + weightB;
    double mean = (A * weightA + B * weightB) / weightTotal;
    System.out.printf("MEDIA = %.5f%n", mean);
    sc.close();
  }
}