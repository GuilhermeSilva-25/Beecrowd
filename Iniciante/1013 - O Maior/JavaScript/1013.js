function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.split(" ").map(Number);
  const largerNumber = higherValue(a, b, c);
  console.log(`${largerNumber} eh o maior`);
}

function higherValue(a, b, c) {
  const higher = Math.max(a, b, c);
  return higher;
}

main();
