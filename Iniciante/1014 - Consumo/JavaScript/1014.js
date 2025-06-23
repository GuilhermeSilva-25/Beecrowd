function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const X = parseInt(lines.shift());
  const Y = parseFloat(lines.shift());
  const averageConsumption = X / Y;
  console.log(`${averageConsumption.toFixed(3)} km/l`);
}

main();
