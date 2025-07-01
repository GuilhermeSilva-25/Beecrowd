import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [a, b] = lines.slice(0, 2).map(Number);
  const sum: number = a + b;
  console.log(`SOMA = ${sum}`);
}

main();
