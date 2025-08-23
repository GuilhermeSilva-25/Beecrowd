import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const pairs: number = checkNumbers(lines);
  console.log(`${pairs} valores pares`);
}

function checkNumbers(array: string[]): number {
  let evenNumberCounter: number = 0;
  for (let i = 0; i < 5; i++) {
    let number: number = Number(array[i]);
    if (number % 2 === 0) {
      evenNumberCounter++;
    }
  }
  return evenNumberCounter;
}

main();
