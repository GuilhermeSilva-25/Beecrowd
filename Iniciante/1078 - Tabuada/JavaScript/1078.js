function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");

  const N = parseInt(input);

  tabuada(N);
}

function tabuada(n) {
  let i = 1;

  while (i <= 10) {
    console.log(`${i} x ${n} = ${i * n}`);
    i++;
  }
}

main();
