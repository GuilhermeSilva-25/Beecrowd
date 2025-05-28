function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");

  const A = parseFloat(lines.shift());
  const B = parseFloat(lines.shift());
  const C = parseFloat(lines.shift());

  const valorDelta = delta(A, B, C);

  if (A == 0 || valorDelta < 0) {
    console.log("Impossivel calcular");
  } else {
    console.log(`R1 = ${bhaskara(A, B, valorDelta)[0].toFixed(5)}`);
    console.log(`R2 = ${bhaskara(A, B, valorDelta)[1].toFixed(5)}`);
  }
}

function delta(a, b, c) {
  return b ** 2 - 4 * a * c;
}

function bhaskara(a, b, d) {
  const R1 = (-b + d ** 0.5) / (2 * a);
  const R2 = (-b - d ** 0.5) / (2 * a);

  return [R1, R2];
}

main();
