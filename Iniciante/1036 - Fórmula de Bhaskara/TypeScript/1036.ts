import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.split(" ").map(Number);
  const delta: number = calculateDelta(a, b, c);
  if (delta < 0 || a === 0) {
    console.log("Impossivel calcular");
  } else {
    const roots: number[] = calculateRoots(a, b, delta);
    console.log(`R1 = ${roots[0].toFixed(5)}`);
    console.log(`R2 = ${roots[1].toFixed(5)}`);
  }
}

function calculateDelta(a: number, b: number, c: number): number {
  return Math.pow(b, 2) - 4 * a * c;
}

function calculateRoots(a: number, b: number, delta: number): number[] {
  const r1 = (-b + Math.sqrt(delta)) / (2 * a);
  const r2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [r1, r2];
}

main();
