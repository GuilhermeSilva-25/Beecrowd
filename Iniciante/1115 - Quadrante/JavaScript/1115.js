function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  let controle = 0;
  for (let i = 0; controle === 0; i++) {
    let valorAtual = lines[i].split(" ");
    X = parseInt(valorAtual[0]);
    Y = parseInt(valorAtual[1]);

    if (X === 0 || Y === 0) {
      controle = 1;
    } else if (X > 0 && Y > 0) {
      console.log("primeiro");
    } else if (X > 0 && Y < 0) {
      console.log("quarto");
    } else if (X < 0 && Y < 0) {
      console.log("terceiro");
    } else if (X < 0 && Y > 0) {
      console.log("segundo");
    }
  }
}

main();
