import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String word = sc.nextLine();
    String message = (word.length() >= 10) ? "palavrao" : "palavrinha";
    System.out.println(message);
    sc.close();
  }
}
