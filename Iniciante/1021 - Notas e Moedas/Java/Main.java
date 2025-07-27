import java.util.Scanner;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    double value = sc.nextDouble();
    double[] banknotesList = {100, 50, 20, 10, 5, 2};
    double[] coinsList = {1.0, 0.5, 0.25, 0.1, 0.05, 0.01};
    double leftover = calculationBanknotes(value, banknotesList);
    calculationCoins(leftover, coinsList);
    sc.close();
  }

  public static double calculationBanknotes(double value, double[] banknotesList) {
   System.out.println("NOTAS:");
    for (double banknote : banknotesList) {
      int amountBanknotes = (int) Math.floor(value / banknote);
      System.out.printf("%d nota(s) de R$ %.2f%n", amountBanknotes, banknote);
      value -= amountBanknotes * banknote;
    }
    return value;
  }

  public static void calculationCoins(double value, double[] coinsList) {
    System.out.println("MOEDAS:");
    for (double coin : coinsList) {
      int amountCoins = (int) Math.floor((value + 0.00001) / coin);
      System.out.printf("%d moeda(s) de R$ %.2f%n", amountCoins, coin);
      value -= amountCoins * coin;
    }
  }
}


