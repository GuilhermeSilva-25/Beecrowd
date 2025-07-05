import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const employeeNumber: number = parseInt(lines.shift()!);
  const hoursWorked: number = parseInt(lines.shift()!);
  const hourValue: number = parseFloat(lines.shift()!);
  const salary: number = hourValue * hoursWorked;
  console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${salary.toFixed(2)}`);
}

main();
