function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const A = parseFloat(lines.shift());
  const B = parseFloat(lines.shift());
  const C = parseFloat(lines.shift());
  const weightA = 2;
  const weightB = 3;
  const weightC = 5;
  const weightTotal = weightA + weightB + weightC; 
  const mean = (A * weightA + B * weightB + C * weightC) / weightTotal;
  console.log(`MEDIA = ${mean.toFixed(1)}`);
}

main();
