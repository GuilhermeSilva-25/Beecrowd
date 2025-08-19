function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const [a, b] = input.split(" ").map(Number);
  const result = areMultiples(a, b);
  console.log(result);
}

function areMultiples(a, b) {
  if ((b % a === 0) || (a % b === 0)) {
    return "Sao Multiplos";
  } else {
    return "Nao sao Multiplos";
  }
}

main();
