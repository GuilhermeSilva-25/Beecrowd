function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  let positiveValues = 0;
  for (let i = 0; i < 6; i++) {
    let value = parseFloat(lines.shift());
    if (value > 0) {
      positiveValues++;
    }
  }
  console.log(`${positiveValues} valores positivos`);
}

main();
