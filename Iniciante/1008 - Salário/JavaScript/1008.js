function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const numeroFuncionario = parseInt(lines.shift());
  const horasTrabalhadas = parseInt(lines.shift());
  const valorHora = parseFloat(lines.shift());

  console.log(
    `NUMBER = ${numeroFuncionario}\nSALARY = U$ ${salario(
      horasTrabalhadas,
      valorHora
    ).toFixed(2)}`
  );
}

function salario(b, c) {
  return c * b;
}

main();
