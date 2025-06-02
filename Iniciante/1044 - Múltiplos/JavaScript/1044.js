function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");

  const A = parseInt(lines[0]);
  const B = parseInt(lines[1]);

  console.log(multiplos(A, B));
}

function multiplos(a, b) {
  if (a % b == 0 || b % a == 0) {
    return "Sao Multiplos";
  } else {
    return "Nao sao Multiplos";
  }
}

main();
