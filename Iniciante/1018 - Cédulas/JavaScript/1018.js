function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");

  const valor = parseInt(input);
  console.log(valor);
  const cedulas = [100, 50, 20, 10, 5, 2, 1];

  notas(cedulas, valor);
}

function notas(x, y) {
  for (let i = 0; i < x.length; i++) {
    let quantidadeNotas = Math.trunc(y / x[i]);
    console.log(`${quantidadeNotas} nota(s) de R$ ${x[i]},00`);
    y -= quantidadeNotas * x[i];
  }
}

main();
