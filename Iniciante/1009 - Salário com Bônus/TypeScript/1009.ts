import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const sellerName: string = lines.shift()!;
  const salary: number = parseFloat(lines.shift()!);
  const totalSales: number = parseFloat(lines.shift()!);
  const commission: number = 0.15;
  const totalSalary: number = salary + (totalSales * commission);
  console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
}

main();