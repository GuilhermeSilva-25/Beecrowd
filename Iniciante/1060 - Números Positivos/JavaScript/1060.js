function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const lista = lines.map((item) => parseFloat(item, 10));

  console.log(`${positivo(lista)} valores positivos`);
}

function positivo(l) {
  let positivos = 0;
  for (let item of l) {
    if (item >= 0) {
      positivos++;
    }
  }
  return positivos;
}

main();
