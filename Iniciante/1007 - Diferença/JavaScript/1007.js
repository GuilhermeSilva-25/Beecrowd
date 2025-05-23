function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const A = parseInt(lines.shift());
  const B = parseInt(lines.shift());
  const C = parseInt(lines.shift());
  const D = parseInt(lines.shift());

  console.log(`DIFERENCA = ${diferenca(A, B, C, D)}`);
}

function diferenca(x, y, z, w) {
  return x * y - z * w;
}

main();
