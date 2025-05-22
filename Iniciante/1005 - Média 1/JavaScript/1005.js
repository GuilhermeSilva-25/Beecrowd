function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const A = parseFloat(lines.shift());
  const B = parseFloat(lines.shift());

  console.log(`MEDIA = ${media(A, B).toFixed(5)}`);
}

function media(x, y) {
  return (x * 3.5 + y * 7.5) / 11;
}

main();
