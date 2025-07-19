import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final int INTERVAL_START = 10;
    final int INTERVAL_END = 20;
    int N = sc.nextInt();
    int in = 0;
    int out = 0;
    for (int i = 0; i < N; i++) {
      int value = sc.nextInt();
      if (value >= INTERVAL_START && value <= INTERVAL_END) {
        in++;
      } else {
        out++;
      }
    }
    System.out.println(in + " in");
    System.out.println(out + " out");
    sc.close();
  }
}
