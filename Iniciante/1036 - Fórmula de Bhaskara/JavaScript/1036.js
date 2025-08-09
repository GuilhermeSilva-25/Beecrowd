function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.split(" ").map(Number);
  const delta = calculateDelta(a, b, c);
  if (delta < 0 || a === 0) {
    console.log("Impossivel calcular");
  } else {
    const roots = calculateRoots(a, b, delta);
    console.log(`R1 = ${roots[0].toFixed(5)}`);
    console.log(`R2 = ${roots[1].toFixed(5)}`);
  }
}

function calculateDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

function calculateRoots(a, b, delta) {
  const r1 = (-b + Math.sqrt(delta)) / (2 * a);
  const r2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [r1, r2];
}

main();
