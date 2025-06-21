import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8");
  const PI: number = 3.14159;
  const raio: number = parseFloat(input);
  const area: number = PI * (raio ** 2);
  console.log(`A=${area.toFixed(4)}`);
}

main();
