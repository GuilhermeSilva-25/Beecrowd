function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  const numero = parseFloat(input);
  console.log(intervalo(numero));
}

function intervalo(n) {
  if (n >= 0 && n <= 25) {
    return "Intervalo [0,25]";
  } else if (n > 25 && n <= 50) {
    return "Intervalo (25,50]";
  } else if (n > 50 && n <= 75) {
    return "Intervalo (50,75]";
  } else if (n > 75 && n <= 100) {
    return "Intervalo (75,100]";
  } else {
    return "Fora de intervalo";
  }
}

main();
