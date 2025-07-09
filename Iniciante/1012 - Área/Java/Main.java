import java.util.Locale;
import java.util.Scanner;

public class Main {

  public static final double PI = 3.14159;

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    double a = sc.nextDouble();
    double b = sc.nextDouble();
    double c = sc.nextDouble();
    double rightTriangleArea = calculateRightTriangleArea(a, c);
    double circleArea = calculateCircleArea(c);
    double trapezoidArea = calculateTrapezoidArea(a, b, c);
    double squareArea = calculateSquareArea(b);
    double rectangleArea = calculateRectangleArea(a, b);
    System.out.printf("TRIANGULO: %.3f%n", rightTriangleArea);
    System.out.printf("CIRCULO: %.3f%n", circleArea);
    System.out.printf("TRAPEZIO: %.3f%n", trapezoidArea);
    System.out.printf("QUADRADO: %.3f%n", squareArea);
    System.out.printf("RETANGULO: %.3f%n", rectangleArea);
    sc.close();
  }

  public static double calculateRightTriangleArea(double base, double height) {
    return (base * height) / 2;
  }

  public static double calculateCircleArea(double radius) {
    return PI * Math.pow(radius, 2);
  }

  public static double calculateTrapezoidArea(double baseA, double baseB, double height) {
    return (baseA + baseB) * (height / 2);
  }

  public static double calculateSquareArea(double side) {
    return Math.pow(side, 2);
  }

  public static double calculateRectangleArea(double sideA, double sideB) {
    return sideA * sideB;
  }
}