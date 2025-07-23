import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  let positiveValues: number = 0;
  for (let i = 0; i < 6; i++) {
    let value: number = parseFloat(lines.shift()!);
    if (value > 0) {
      positiveValues++;
    }
  }
  console.log(`${positiveValues} valores positivos`);
}

main();
