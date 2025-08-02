import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    sc.next();
    int startDay = sc.nextInt();
    int startHour = sc.nextInt();
    sc.next();
    int startMinute = sc.nextInt();
    sc.next();
    int startSecond = sc.nextInt();
    sc.next();
    int endDay = sc.nextInt();
    int endHour = sc.nextInt();
    sc.next();
    int endMinute = sc.nextInt();
    sc.next();
    int endSecond = sc.nextInt();
    final int SECONDS_IN_AN_DAY = 86400;
    final int SECONDS_IN_AN_HOUR = 3600;
    final int SECONDS_IN_AN_MINUTE = 60;

    int start = (startDay * SECONDS_IN_AN_DAY) + (startHour * SECONDS_IN_AN_HOUR) + (startMinute * SECONDS_IN_AN_MINUTE)
        + startSecond;
    int end = (endDay * SECONDS_IN_AN_DAY) + (endHour * SECONDS_IN_AN_HOUR) + (endMinute * SECONDS_IN_AN_MINUTE)
        + endSecond;
    int duration = end - start;

    int day = duration / SECONDS_IN_AN_DAY;
    int leftover = duration % SECONDS_IN_AN_DAY;
    int hour = leftover / SECONDS_IN_AN_HOUR;
    leftover %= SECONDS_IN_AN_HOUR;
    int minute = leftover / SECONDS_IN_AN_MINUTE;
    int second = leftover % SECONDS_IN_AN_MINUTE;

    System.out.printf("%d dia(s)%n", day);
    System.out.printf("%d hora(s)%n", hour);
    System.out.printf("%d minuto(s)%n", minute);
    System.out.printf("%d segundo(s)%n", second);
    sc.close();
  }
}
