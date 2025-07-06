import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const sellerName: string = lines.shift()!;
  const fixedSalary: number = parseFloat(lines.shift()!);
  const totalSalesMonth: number = parseFloat(lines.shift()!);
  const COMMISSION_RATE: number = 0.15;
  const totalSalary: number = totalSalesMonth * COMMISSION_RATE + fixedSalary;
  console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
}

main();
