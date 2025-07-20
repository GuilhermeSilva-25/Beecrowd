import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final int CORRECT_PASSWORD = 2002;
    while (true) {
      int password = sc.nextInt();
      if (password == CORRECT_PASSWORD) {
        System.out.println("Acesso Permitido");
        break;
      } else {
        System.out.println("Senha Invalida");
      }
    }
    sc.close();
  }
}
