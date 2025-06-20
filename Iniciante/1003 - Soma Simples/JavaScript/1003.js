function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");

  const A = parseInt(lines.shift());
  const B = parseInt(lines.shift());
  const SOMA = A + B;
  console.log(`SOMA = ${SOMA}`);
}

main();
