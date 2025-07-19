import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const INTERVAL_START: number = 10;
  const INTERVAL_END: number = 20;
  const N: number = parseInt(lines.shift());
  let valuesIn: number = 0;
  let valuesOut: number = 0;
  for (let i: number = 0; i < N; i++) {
    let value: number = parseInt(lines.shift());
    if (value >= INTERVAL_START && value <= INTERVAL_END) {
      valuesIn++;
    } else {
      valuesOut++;
    }
  }
  console.log(`${valuesIn} in`);
  console.log(`${valuesOut} out`);
}

main();
