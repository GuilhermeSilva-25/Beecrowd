function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");

  let valor = parseFloat(input);
  const listaCedulas = [100, 50, 20, 10, 5, 2];
  const listaMoedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

  const sobra = cedulas(valor, listaCedulas);
  moedas(sobra, listaMoedas);
}

function cedulas(v, l) {
  console.log("NOTAS:");

  for (let cedula of l) {
    let quantidadeCedulas = Math.trunc(v / cedula);
    console.log(`${quantidadeCedulas.toFixed(0)} nota(s) de R$ ${cedula}.00`);
    v -= quantidadeCedulas * cedula;
  }

  return v;
}

function moedas(v, l) {
  console.log("MOEDAS:");

  for (let moeda of l) {
    quantidadeMoedas = parseInt(Math.round((v / moeda) * 100) / 100);
    console.log(`${quantidadeMoedas.toFixed(0)} moeda(s) de R$ ${moeda.toFixed(2)}`);
    v -= quantidadeMoedas * moeda;
  }
}

main();
