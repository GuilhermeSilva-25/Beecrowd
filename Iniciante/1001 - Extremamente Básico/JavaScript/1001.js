function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [A, B] = lines.slice(0, 2).map(Number);
  const X = A + B;
  console.log(`X = ${X}`);
}

main();
