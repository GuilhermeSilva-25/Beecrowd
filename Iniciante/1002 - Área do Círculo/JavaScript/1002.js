function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const pi = 3.14159;
  const raio = parseFloat(lines.shift());

  console.log(`A=${area(pi, raio)}`);
}

function area(n, r) {
  return (n * Math.pow(r, 2)).toFixed(4);
}

main()