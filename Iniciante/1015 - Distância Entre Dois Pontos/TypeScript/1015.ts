import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [x1, y1] = lines[0].split(" ").map(parseFloat);
  const [x2, y2] = lines[1].split(" ").map(parseFloat);
  const distance: number = calculateDistance(x1, x2, y1, y2);
  console.log(`${distance.toFixed(4)}`);
}

function calculateDistance(x1: number, x2: number, y1: number, y2: number): number {
  return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

main();
