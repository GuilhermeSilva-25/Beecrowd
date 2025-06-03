function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  valores = lines.map((item) => parseInt(item, 10));

  console.log(`${verificadorPar(valores)} valores pares`);
}

function verificadorPar(l) {
  let contador = 0;
  for (let i of l) {
    if (i % 2 == 0) {
      contador++;
    }
  }
  return contador;
}

main();
