import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const X: number = parseInt(lines.shift()!);
  const Y: number = parseFloat(lines.shift()!);
  const averageConsumption: number = X / Y;
  console.log(`${averageConsumption.toFixed(3)} km/l`);
}

main();
