function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  let verificador = 0;
  let media = 0;
  let contador = 0;

  while (verificador === 0) {
    while (contador < 2) {
      nota = parseFloat(lines.shift());
      if (nota <= 10 && nota >= 0) {
        media += nota;
        contador++;
      } else {
        console.log("nota invalida");
      }
    }
    media /= 2;
    console.log(`media = ${media.toFixed(2)}`);
    verificador = 1;
  }
}

main();
