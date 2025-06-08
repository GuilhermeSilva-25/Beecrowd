function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  console.log(maiorValor(lines));
}

function maiorValor(l) {
  let lista = l.map((item) => parseInt(item, 10));
  let numero = 0;
  let valorMaior = 0;
  let posicao = 0;

  for (let i = 0; i <= 100; i++) {
    numero = lista[i];

    if (numero >= valorMaior) {
      valorMaior = numero;
      posicao = i + 1;
    }
  }

  return `${valorMaior}\n${posicao}`;
}

main();
