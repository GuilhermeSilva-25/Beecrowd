import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  let totalValue: number = 0;
  for (let i = 0; i < 2; i++) {
    let item: string[] = lines[i].split(" ");
    let code: number = parseInt(item[0]);
    let amount: number = parseInt(item[1]);
    let value: number = parseFloat(item[2]);
    totalValue += amount * value;
  }

  console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`);
}

main();