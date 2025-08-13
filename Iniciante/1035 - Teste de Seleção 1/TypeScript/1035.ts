import * as fs from "fs";

function main() {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split(" ");

  const A: number = parseInt(lines.shift()!);
  const B: number = parseInt(lines.shift()!);
  const C: number = parseInt(lines.shift()!);
  const D: number = parseInt(lines.shift()!);

  console.log(validacao(A, B, C, D));
}

function validacao(a: number, b: number, c: number, d: number): string {
  if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    return "Valores aceitos";
  } else {
    return "Valores nao aceitos";
  }
}

main();
