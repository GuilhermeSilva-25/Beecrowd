function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const A = parseFloat(lines.shift());
  const B = parseFloat(lines.shift());
  const C = parseFloat(lines.shift());

  console.log(`MEDIA = ${media(A, B, C).toFixed(1)}`);
}

function media(x, y, z) {
  return (x * 2 + y * 3 + z * 5) / 10;
}

main()