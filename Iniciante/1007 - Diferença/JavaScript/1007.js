function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [a, b, c, d] = lines.slice(0, 4).map(Number);
  const difference = a * b - c * d;
  console.log(`DIFERENCA = ${difference}`);
}

main();
