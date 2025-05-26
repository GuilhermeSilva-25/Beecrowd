function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const tempoViagem = parseInt(lines.shift());
  const velocidadeMedia = parseInt(lines.shift());
  const consumo = 12;

  const distancia = distanciaPercorrida(tempoViagem, velocidadeMedia);

  console.log(`${gastoCombustivel(distancia, consumo).toFixed(3)}`);
}

function distanciaPercorrida(a, b) {
  return a * b;
}

function gastoCombustivel(x, y) {
  return x / y;
}

main();
