import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int durationInSeconds = sc.nextInt();
    final int TOTAL_SECONDS_ONE_HOUR = 3600;
    final int TOTAL_MINUTES_ONE_HOUR = 60;
    int hours = durationInSeconds / TOTAL_SECONDS_ONE_HOUR;
    int remainingSeconds = durationInSeconds % TOTAL_SECONDS_ONE_HOUR;
    int minutes = remainingSeconds / TOTAL_MINUTES_ONE_HOUR;
    int seconds = remainingSeconds % TOTAL_MINUTES_ONE_HOUR;
    System.out.printf("%d:%d:%d%n", hours, minutes, seconds);
    sc.close();
  }
}