function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  let verificador = 0;
  let alcool = 0;
  let gasolina = 0;
  let diesel = 0;

  for (let i = 0; verificador === 0; i++) {
    let produto = parseInt(lines.shift());

    switch (produto) {
      case 1:
        alcool++;
        break;
      case 2:
        gasolina++;
        break;
      case 3:
        diesel++;
        break;
      case 4:
        verificador = 1;
    }
  }
  console.log(
    `MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`
  );
}

main();
