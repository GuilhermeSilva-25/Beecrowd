import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int even = 0, odd = 0, positive = 0, negative = 0;
        for (int i = 1; i <= 5; i++) {
            int number = sc.nextInt();
            if (number < 0) {
                negative++;
            } else if (number > 0) {
                positive++;
            }
            if (number % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }
        System.out.printf("%d valor(es) par(es)%n", even);
        System.out.printf("%d valor(es) impar(es)%n", odd);
        System.out.printf("%d valor(es) positivo(s)%n", positive);
        System.out.printf("%d valor(es) negativo(s)%n", negative);
        sc.close();
    }
}