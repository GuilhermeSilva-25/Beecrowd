function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const FUEL_EFFICIENCY = 12; // 12 km per liter
  const travelTime = Number(lines.shift()); // in hours
  const averageSpeed = Number(lines.shift()); // km per hours
  const fuelRequired = calculateFuelRequired(FUEL_EFFICIENCY, travelTime, averageSpeed);
  console.log(`${fuelRequired.toFixed(3)}`);
}

function calculateFuelRequired(fuelEfficiency, travelTime, averageSpeed) {
  return (travelTime * averageSpeed) / fuelEfficiency;
}

main();