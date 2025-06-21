import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");

  const A: number = parseInt(lines.shift()!);
  const B: number = parseInt(lines.shift()!);
  const C: number = parseInt(lines.shift()!);
  const D: number = parseInt(lines.shift()!);
  // O TypeScript infere que [A, B, C, D] é um array de 'number'
  // const [A, B, C, D] = lines.slice(0, 4).map(Number);

  const DIFERENCA: number = A * B - C * D;
  console.log(`DIFERENCA = ${DIFERENCA}`);
}

main();
