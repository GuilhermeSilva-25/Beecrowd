import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const value: number = parseInt(input);
  console.log(value);
  const banknotes: number[] = [100, 50, 20, 10, 5, 2, 1];
  necessaryBanknotes(banknotes, value);
}

function necessaryBanknotes(banknotes: number[], value: number): void {
  for (let i = 0; i < banknotes.length; i++) {
    let amountBanknotes: number = Math.trunc(value / banknotes[i]);
    console.log(`${amountBanknotes} nota(s) de R$ ${banknotes[i]},00`);
    value %= banknotes[i];
  }
}

main();
