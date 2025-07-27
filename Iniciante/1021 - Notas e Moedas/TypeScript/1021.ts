import * as fs from "fs";

function main(): void {
  const input: string =  fs.readFileSync('/dev/stdin', 'utf8');
  let value: number = parseFloat(input);
  const banknotesList: number[] = [100, 50, 20, 10, 5, 2];
  const coinsList: number[] = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
  const leftover: number = calculationBanknotes(value, banknotesList);
  calculationCoins(leftover, coinsList);
}

function print(text: string): void {
  console.log(text);
}

function calculationBanknotes(value: number, banknotesList: number[]): number {
  print("NOTAS:");
  for (let banknote of banknotesList) {
    let amountBanknotes: number = Math.trunc(value / banknote);
    print(`${amountBanknotes.toFixed(0)} nota(s) de R$ ${banknote}.00`);
    value -= amountBanknotes * banknote;
  }
  return value;
}

function calculationCoins(leftover: number, coinsList: number[]): void {
  print("MOEDAS:");
  for (let coin of coinsList) {
    let amountCoins: number = Math.trunc((leftover + 0.00001) / coin);
    print(`${amountCoins.toFixed(0)} moeda(s) de R$ ${coin.toFixed(2)}`);
    leftover = parseFloat((leftover - amountCoins * coin).toFixed(2));
  }
}

main();
