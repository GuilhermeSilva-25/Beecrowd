function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const INTERVAL_START = 10;
  const INTERVAL_END = 20;
  const N = parseInt(lines.shift());
  let valuesIn = 0;
  let valuesOut = 0;
  for (i = 0; i < N; i++) {
    let value = parseInt(lines.shift());
    if (value >= INTERVAL_START && value <= INTERVAL_END) {
      valuesIn++;
    } else {
      valuesOut++;
    }
  }
  console.log(`${valuesIn} in`);
  console.log(`${valuesOut} out`);
}

main();
