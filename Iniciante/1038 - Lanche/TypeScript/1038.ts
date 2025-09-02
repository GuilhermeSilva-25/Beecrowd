import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync("/dev/stdin", "utf8");
    const [item, amount]: number[] = input.split(" ").map(Number);
    const menu = {
      1: 4.0,
      2: 4.5,
      3: 5.0,
      4: 2.0,
      5: 1.5,
    };
  const price: number = menu[item];
  const total: number = amount * price;
  console.log(`Total: R$ ${total.toFixed(2)}`);
}

main();
