function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");

  const coordenadas = lines.map((item) => parseFloat(item, 10));

  console.log(quadrante(coordenadas));
}

function quadrante(coordenadas) {
  let x = coordenadas[0];
  let y = coordenadas[1];

  if (x == 0 && y == 0) {
    return "Origem";
  } else if (x > 0 && y > 0) {
    return "Q1";
  } else if (x > 0 && y < 0) {
    return "Q4";
  } else if (x < 0 && y > 0) {
    return "Q2";
  } else if (x < 0 && y < 0) {
    return "Q3";
  } else if (x == 0 && y != 0) {
    return "Eixo Y";
  } else if (y == 0 && x != 0) {
    return "Eixo X";
  }
}

main();
