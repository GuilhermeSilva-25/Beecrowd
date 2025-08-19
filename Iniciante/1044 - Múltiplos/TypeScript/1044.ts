import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const [a, b] = input.split(" ").map(Number);
  const result: string = areMultiples(a, b);
  console.log(result);
}

function areMultiples(a: number, b: number): string {
  if ((b % a === 0) || (a % b === 0)) {
    return "Sao Multiplos";
  } else {
    return "Nao sao Multiplos";
  }
}

main();
