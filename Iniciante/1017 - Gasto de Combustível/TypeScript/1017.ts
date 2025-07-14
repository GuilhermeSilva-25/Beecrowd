import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const FUEL_EFFICIENCY: number = 12; // 12 km per liter
  const travelTime: number = Number(lines.shift()!); // in hours
  const averageSpeed: number = Number(lines.shift()!); // km per hours
  const fuelRequired = calculateFuelRequired(FUEL_EFFICIENCY, travelTime, averageSpeed);
  console.log(`${fuelRequired.toFixed(3)}`);
}

function calculateFuelRequired(fuelEfficiency: number, travelTime: number, averageSpeed: number): number {
  return (travelTime * averageSpeed) / fuelEfficiency;
}

main();