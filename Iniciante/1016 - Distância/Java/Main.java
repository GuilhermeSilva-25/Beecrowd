import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int distance = sc.nextInt();
    int time = calculateTime(distance);
    System.out.printf("%d minutos%n", time);
    sc.close();
  }

  public static int calculateTime(int distance) {
    return distance * 2;
  }
}