import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [A, B] = lines.slice(0, 2).map(Number);
  const X: number = A + B;
  console.log(`X = ${X}`);
}

main();
