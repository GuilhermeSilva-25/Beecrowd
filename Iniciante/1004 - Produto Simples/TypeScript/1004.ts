import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const A: number = parseInt(lines.shift()!);
  const B: number = parseInt(lines.shift()!);
  const PROD: number = A * B;
  console.log(`PROD = ${PROD}`);
}

main();
