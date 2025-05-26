function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");

  const km = parseInt(input);

  console.log(`${distanciaTempo(km)} minutos`);
}

function distanciaTempo(a) {
  return a * 2;
}

main();
