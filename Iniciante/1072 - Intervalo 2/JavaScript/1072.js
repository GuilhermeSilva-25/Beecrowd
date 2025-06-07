function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const N = parseInt(lines.shift());

  console.log(inOrOut(N, lines));
}

function inOrOut(n, l) {
  let contador = 0;
  let dentro = 0;
  let fora = 0;

  while (contador < n) {
    X = parseInt(l.shift());
    if (X <= 20 && X >= 10) {
      dentro++;
    } else {
      fora++;
    }
    contador++;
  }
  return `${dentro} in\n${fora} out`;
}

main();
