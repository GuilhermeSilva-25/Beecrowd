function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  const X = parseInt(input);

  valoresImpares(X);
}

function valoresImpares(x) {
  for (let i = 0; i < 6; i++) {
    if (x % 2 === 0) {
      x += 1;
    }
    console.log(x);
    x += 2;
  }
}

main();
