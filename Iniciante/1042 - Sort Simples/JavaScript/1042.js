function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");
  let lista = lines.map((item) => parseInt(item, 10));

  crescente(lista);
  original(lista);
}

function crescente(l) {
  let lista = l.slice();
  lista.sort((a, b) => a - b);

  for (let item of lista) {
    console.log(item);
  }

  console.log();
}

function original(l) {
  for (let item of l) {
    console.log(item);
  }
}

main();
