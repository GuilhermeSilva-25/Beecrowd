import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const distance: number = parseInt(input);
  const time: number = calculateTime(distance);
  console.log(`${time} minutos`);
}

function calculateTime(distance: number): number {
  return distance * 2;
}

main();