function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const a = parseFloat(lines.shift());
  const b = parseFloat(lines.shift());
  const c = parseFloat(lines.shift());
  const WEIGHT_A = 2;
  const WEIGHT_B = 3;
  const WEIGHT_C = 5;
  const TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C;
  const average = (a * WEIGHT_A + b * WEIGHT_B + c * WEIGHT_C) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${average.toFixed(1)}`);
}

main();
