function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [a, b] = lines.slice(0, 2).map(Number);
  const sum = a + b;
  console.log(`SOMA = ${sum}`);
}

main();
