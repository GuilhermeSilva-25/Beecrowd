import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const totalDistanceTraveled: number = parseInt(lines.shift()!);
  const totalFuelUsed: number = parseFloat(lines.shift()!);
  const averageConsumption: number = calculateAverageConsumption(totalDistanceTraveled, totalFuelUsed);
  console.log(`${averageConsumption.toFixed(3)} km/l`);
}

function calculateAverageConsumption(totalKm: number, totalFuel: number): number {
  return totalKm / totalFuel;
}

main();