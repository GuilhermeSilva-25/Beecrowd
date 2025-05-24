function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split();

  const raio = parseFloat(lines.shift());
  const pi = 3.14159;

  console.log(`VOLUME = ${volume(raio, pi).toFixed(3)}`);
}

function volume(a, b) {
  return (4 / 3) * b * (a ** 3);
}

main();
