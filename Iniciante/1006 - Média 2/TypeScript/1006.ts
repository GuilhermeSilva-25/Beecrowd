import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const a: number = parseFloat(lines.shift()!);
  const b: number = parseFloat(lines.shift()!);
  const c: number = parseFloat(lines.shift()!);
  const WEIGHT_A: number = 2;
  const WEIGHT_B: number = 3;
  const WEIGHT_C: number = 5;
  const TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C;
  const average: number =
    (a * WEIGHT_A + b * WEIGHT_B + c * WEIGHT_C) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${average.toFixed(1)}`);
}

main();
