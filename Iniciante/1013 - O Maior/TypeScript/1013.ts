import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.split(" ").map(Number);
  const largeNumber: number = higherValue(a, b, c);
  console.log(`${largeNumber} eh o maior`);
}

function higherValue(a: number, b: number, c: number): number {
  const higher: number = Math.max(a, b, c);
  return higher;
}

main();
