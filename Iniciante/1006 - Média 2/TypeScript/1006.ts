import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const A: number = parseFloat(lines.shift()!);
  const B: number = parseFloat(lines.shift()!);
  const C: number = parseFloat(lines.shift()!);
  const weightA: number = 2;
  const weightB: number = 3;
  const weightC: number = 5;
  const weightTotal: number = weightA + weightB + weightC; 
  const mean: number = (A * weightA + B * weightB + C * weightC) / weightTotal;
  console.log(`MEDIA = ${mean.toFixed(1)}`);
}

main();