function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [travelTime, averageSpeed] = lines.slice(0, 2).map(Number);
  const consumption = 12;
  const distanceTraveled = travelTime * averageSpeed;
  const fuelSpent = distanceTraveled / consumption;
  console.log(fuelSpent.toFixed(3));
}

main();
