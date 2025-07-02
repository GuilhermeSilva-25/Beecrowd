function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const valueOne = parseInt(lines.shift());
  const valueTwo = parseInt(lines.shift());
  const product = valueOne * valueTwo;
  console.log(`PROD = ${product}`);
}

main();
