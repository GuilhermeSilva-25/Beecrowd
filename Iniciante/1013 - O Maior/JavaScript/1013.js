function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");

  console.log(`${numeroMaior(lines)} eh o maior`);
}

function numeroMaior(l) {
  const lista = l.map((item) => parseInt(item, 10));
  lista.sort((a, b) => b - a);
  return lista[0];
}

main()
