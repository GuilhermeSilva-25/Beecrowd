function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  let contador = 0;
  let somaIdade = 0;
  let verificador = 0;

  while (verificador === 0) {
    idade = parseInt(lines.shift());
    if (idade < 0) {
      verificador = 1;
    } else {
      somaIdade += idade;
      contador++;
    }
  }

  let media = somaIdade / contador;
  console.log(`${media.toFixed(2)}`);
}

main();
