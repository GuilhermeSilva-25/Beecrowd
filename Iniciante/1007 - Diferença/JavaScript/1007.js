function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");

  const A = parseInt(lines.shift());
  const B = parseInt(lines.shift());
  const C = parseInt(lines.shift());
  const D = parseInt(lines.shift());
  // Pega as 4 primeiras linhas e converte cada uma para número
  // const [A, B, C, D] = lines.slice(0, 4).map(Number);
  const DIFERENCA = A * B - C * D;
  console.log(`DIFERENCA = ${DIFERENCA}`);
}

main();
