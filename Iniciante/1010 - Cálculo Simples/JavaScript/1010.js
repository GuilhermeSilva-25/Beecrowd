function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");
  let valorTotal = 0;

  for (let i = 0; i < 2; i++) {
    let item = lines[i].split(" ");
    let codigo = parseInt(item[0]);
    let quantidade = parseInt(item[1]);
    let valor = parseFloat(item[2]);
    valorTotal += quantidade * valor;
  }

  console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);
}

main();
