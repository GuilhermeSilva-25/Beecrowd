function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [A, B] = lines.slice(0, 2).map(Number);
  const weightA = 3.5;
  const weightB = 7.5;
  const weightTotal = weightA + weightB;
  const mean = (A * weightA + B * weightB) / weightTotal;
  console.log(`MEDIA = ${mean.toFixed(5)}`);
}

main();
