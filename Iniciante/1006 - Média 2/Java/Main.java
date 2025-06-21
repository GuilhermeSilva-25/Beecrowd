import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double A = sc.nextDouble();
    double B = sc.nextDouble();
    double C = sc.nextDouble();
    int weightA = 2;
    int weightB = 3;
    int weightC = 5;
    int weightTotal = weightA + weightB + weightC;
    double mean = (A * weightA + B * weightB + C * weightC) / weightTotal;
    System.out.printf("MEDIA = %.1f%n", mean);
    sc.close();
  }
}