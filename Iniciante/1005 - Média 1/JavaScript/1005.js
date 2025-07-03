function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const a = parseFloat(lines.shift());
  const b = parseFloat(lines.shift());
  const WEIGHT_A = 3.5;
  const WEIGHT_B = 7.5;
  const TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B;
  const average = (a * WEIGHT_A + b * WEIGHT_B) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${average.toFixed(5)}`);
}

main();
