function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const X = parseInt(lines.shift());
  const Y = parseFloat(lines.shift());

  console.log(`${consumo(X, Y).toFixed(3)} km/l`);
}

function consumo(a, b) {
  return a / b;
}

main();
