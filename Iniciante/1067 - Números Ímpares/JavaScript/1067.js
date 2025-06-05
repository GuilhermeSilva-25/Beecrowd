function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  const X = parseInt(input);

  mostrarImpares(X);
}

function mostrarImpares(x) {
  let contador = 1;
  while (contador <= x) {
    console.log(contador);
    contador += 2;
  }
}

main();
