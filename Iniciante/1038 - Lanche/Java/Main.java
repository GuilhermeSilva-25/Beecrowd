import java.util.Scanner;
import java.util.Locale;

public class Main {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        int item = sc.nextInt();
        int amount = sc.nextInt();
        double price = 0.0;
        switch (item) {
            case 1:
                price = 4.00;
                break;
            case 2:
                price = 4.50;
                break;
            case 3:
                price = 5.00;
                break;
            case 4:
                price = 2.00;
                break;
            case 5:
                price = 1.50;
                break;
        }
        double total = amount * price;
        System.out.printf("Total: R$ %.2f%n", total);
        sc.close();
    }
}