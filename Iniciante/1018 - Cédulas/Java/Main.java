import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int value = sc.nextInt();
    System.out.printf("%d%n", value);
    int[] banknotes = {100, 50, 20, 10, 5, 2, 1};
    necessaryBanknotes(value, banknotes);
    sc.close();
  }

  public static void necessaryBanknotes(int value, int[] banknotes) {
    for (int i = 0; i < banknotes.length; i++) {
      int amountBanknotes = value / banknotes[i];
      System.out.printf("%d nota(s) de R$ %d,00%n",amountBanknotes, banknotes[i]);
      value -= amountBanknotes * banknotes[i];
    }
  }
}