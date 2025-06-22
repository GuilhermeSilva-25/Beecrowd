import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [A, B] = lines.slice(0, 2).map(Number);
  const weightA: number = 3.5;
  const weightB: number = 7.5;
  const weightTotal: number = weightA + weightB;
  const mean: number = (A * weightA + B * weightB) / weightTotal;
  console.log(`MEDIA = ${mean.toFixed(5)}`);
}

main();
