import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    int positiveValues = 0;
    for (int i = 0; i < 6; i++) {
      double value = sc.nextDouble();
      if (value > 0) {
        positiveValues++;
      }
    }
    System.out.printf("%d valores positivos%n", positiveValues);
    sc.close();
  }
}