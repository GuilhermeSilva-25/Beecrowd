function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const nomeVendedor = lines.shift();
  const salario = parseFloat(lines.shift());
  const totalVendas = parseFloat(lines.shift());

  console.log(`TOTAL = R$ ${(salario + comissao(totalVendas)).toFixed(2)}`);
}

function comissao(a) {
  return a * 0.15;
}

main();
