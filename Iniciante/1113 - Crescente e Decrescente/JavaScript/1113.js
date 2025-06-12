function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  let controle = 0;
  for (let i = 0; controle === 0; i++) {
    let entradaAtual = lines[i].split(" ");
    let X = parseInt(entradaAtual[0]);
    let Y = parseInt(entradaAtual[1]);

    if (X == Y) {
      controle = 1;
    } else if (X > Y) {
      console.log("Decrescente");
    } else if (Y > X) {
      console.log("Crescente");
    }
  }
}

main();
