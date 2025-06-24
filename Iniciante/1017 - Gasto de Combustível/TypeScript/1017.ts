import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [travelTime, averageSpeed] = lines.slice(0, 2).map(Number);
  const consumption: number = 12;
  const distanceTraveled: number = travelTime * averageSpeed;
  const fuelSpent: number = distanceTraveled / consumption;
  console.log(fuelSpent.toFixed(3));
}

main();
