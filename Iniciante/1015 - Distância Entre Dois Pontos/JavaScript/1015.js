function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");
  var entrada1 = lines[0].split(" ");
  var entrada2 = lines[1].split(" ");

  const x1 = parseFloat(entrada1[0]);
  const x2 = parseFloat(entrada2[0]);
  const y1 = parseFloat(entrada1[1]);
  const y2 = parseFloat(entrada2[1]);

  console.log(distancia(x1, x2, y1, y2).toFixed(4));
}

function distancia(a, b, c, d) {
  return ((b - a) ** 2 + (d - c) ** 2) ** (1 / 2);
}

main();
