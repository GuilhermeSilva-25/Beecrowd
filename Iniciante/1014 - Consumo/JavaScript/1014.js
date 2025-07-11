function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const totalDistanceTraveled = parseInt(lines.shift());
  const totalFuelUsed = parseFloat(lines.shift());
  const averageConsumption = calculateAverageConsumption(totalDistanceTraveled, totalFuelUsed);
  console.log(`${averageConsumption.toFixed(3)} km/l`);
}

function calculateAverageConsumption(totalKm, totalFuel) {
  return totalKm / totalFuel;
}

main();