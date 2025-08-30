import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numberOfCases = sc.nextInt();
        int n1, d1, n2, d2;
        for (int i = 0; i < numberOfCases; i++) {
            n1 = sc.nextInt();
            sc.next();
            d1 = sc.nextInt();
            String operator = sc.next();
            n2 = sc.nextInt();
            sc.next();
            d2 = sc.nextInt();

            int[] result = { 0, 0 };

            switch (operator) {
                case "+":
                    result = sumOperation(n1, d1, n2, d2);
                    break;
                case "-":
                    result = subtractionOperation(n1, d1, n2, d2);
                    break;
                case "*":
                    result = multiplicationOperation(n1, d1, n2, d2);
                    break;
                case "/":
                    result = divisionOperation(n1, d1, n2, d2);
                    break;
            }

            print(result[0], result[1]);
        }
        sc.close();
    }

    public static int[] sumOperation(int n1, int d1, int n2, int d2) {
        return new int[] { (n1 * d2 + n2 * d1), (d1 * d2) };
    }

    public static int[] subtractionOperation(int n1, int d1, int n2, int d2) {
        return new int[] { (n1 * d2 - n2 * d1), (d1 * d2) };
    }

    public static int[] multiplicationOperation(int n1, int d1, int n2, int d2) {
        return new int[] { (n1 * n2), (d1 * d2) };
    }

    public static int[] divisionOperation(int n1, int d1, int n2, int d2) {
        return new int[] { (n1 * d2), (n2 * d1) };
    }

    public static int calculateMaximumCommonDivisor(int numerator, int denominator) {
        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);

        while (denominator != 0) {
            int rest = numerator % denominator;
            numerator = denominator;
            denominator = rest;
        }
        return numerator;
    }

    public static void print(int numerator, int denominator) {
        int maximumCommonDivisor = calculateMaximumCommonDivisor(numerator, denominator);
        System.out.printf("%d/%d = %d/%d%n", numerator, denominator, numerator / maximumCommonDivisor,
                denominator / maximumCommonDivisor);
    }
}
