function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  entradas = lines.map((item) => parseInt(item, 10));

  verificador(entradas);
}

function verificador(l) {
  let contadorPar = 0;
  let contadorImpar = 0;
  let contadorPositivo = 0;
  let contadorNegativo = 0;

  for (let i of l) {
    if (i % 2 == 0) {
      contadorPar++;
    } else if (i % 2 === 1 || i % 2 === -1) {
      contadorImpar++;
    }

    if (i > 0) {
      contadorPositivo++;
    } else if (i < 0 && i !== 0) {
      contadorNegativo++;
    }
  }

  console.log(`${contadorPar} valor(es) par(es)`);
  console.log(`${contadorImpar} valor(es) impar(es)`);
  console.log(`${contadorPositivo} valor(es) positivo(s)`);
  console.log(`${contadorNegativo} valor(es) negativo(s)`);
}

main();
