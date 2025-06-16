function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  let N = parseInt(lines[0]);
  let contador = 0;

  for (let i = 1; contador < N; i++) {
    let valoresAtuais = lines[i].split(" ");
    let X = parseInt(valoresAtuais[0]);
    let Y = parseInt(valoresAtuais[1]);

    if (Y === 0) {
      console.log(`divisao impossivel`);
    } else {
      let divisao = X / Y;
      console.log(`${divisao.toFixed(1)}`);
    }
    contador++;
  }
}

main();
