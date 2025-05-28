function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");

  const A = parseInt(lines.shift());
  const B = parseInt(lines.shift());
  const C = parseInt(lines.shift());
  const D = parseInt(lines.shift());

  console.log(validacao(A, B, C, D));
}

function validacao(a, b, c, d) {
  if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 == 0) {
    return "Valores aceitos";
  } else {
    return "Valores nao aceitos";
  }
}

main();
