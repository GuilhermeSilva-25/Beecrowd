import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [x1, y1] = lines[0].split(" ").map(Number);
  const [x2, y2] = lines[1].split(" ").map(Number);
  const distance: number = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  console.log(distance.toFixed(4));
}

main();
