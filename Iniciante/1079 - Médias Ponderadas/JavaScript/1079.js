function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  mediaPonderada(lines);
}

function mediaPonderada(l) {
  const N = parseInt(l[0]);

  for (let i = 0; i < N; i++) {
    const valorAtualLista = l[i + 1].split(" ");
    let v1 = parseFloat(valorAtualLista[0]);
    let v2 = parseFloat(valorAtualLista[1]);
    let v3 = parseFloat(valorAtualLista[2]);

    let media = (v1 * 2 + v2 * 3 + v3 * 5) / 10;
    console.log(`${media.toFixed(1)}`);
  }
}

main();
