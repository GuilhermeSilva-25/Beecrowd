function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const X = lines.shift();
  const Y = lines.shift();

  console.log(somaImpares(X, Y));
}

function somaImpares(x, y) {
  let somador;
  let controle;
  let soma = 0;
  if (x >= y) {
    somador = x - 1;
    controle = y;
  } else {
    somador = y - 1;
    controle = x;
  }

  while (somador > controle) {
    if (somador % 2 !== 0) {
      soma += somador;
    }
    somador--;
  }
  return soma;
}

main();
