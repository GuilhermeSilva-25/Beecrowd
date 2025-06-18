function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  const N = parseInt(input);

  let contador = N - 1;
  let fatorial = N;

  while (contador > 1) {
    fatorial *= contador;
    contador--;
  }
  console.log(fatorial);
}

main();
