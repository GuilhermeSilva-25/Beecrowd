import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const a: number = parseFloat(lines.shift()!);
  const b: number = parseFloat(lines.shift()!);
  const WEIGHT_A: number = 3.5;
  const WEIGHT_B: number = 7.5;
  const TOTAL_WEIGHT: number = WEIGHT_A + WEIGHT_B;
  const average: number = (a * WEIGHT_A + b * WEIGHT_B) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${average.toFixed(5)}`);
}

main();
