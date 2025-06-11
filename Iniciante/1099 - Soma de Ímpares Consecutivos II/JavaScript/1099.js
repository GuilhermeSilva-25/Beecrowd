function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  somaImpares(lines);
}

function somaImpares(l) {
  let N = parseInt(l.shift());
  for (let i = 0; i < N; i++) {
    let entradasAtual = l[i].split(" ");
    let X = parseInt(entradasAtual[0]);
    let Y = parseInt(entradasAtual[1]);
    let maior = 0;
    let menor = 0;
    let soma = 0;

    if (X > Y) {
      maior = X;
      menor = Y;
    } else {
      maior = Y;
      menor = X;
    }
    let somador = maior - 1;

    while (somador > menor) {
      if (somador % 2 !== 0) {
        soma += somador;
      }
      somador -= 1;
    }
    console.log(soma);
  }
}

main();
