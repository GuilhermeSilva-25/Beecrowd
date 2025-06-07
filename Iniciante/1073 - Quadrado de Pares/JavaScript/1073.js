function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");

  const N = parseInt(input);

  quadrado(N);
}

function quadrado(n) {
  let i = 1;

  while (i <= n) {
    if (n % 2 !== 0 && i !== n) {
      i++;
    }
    if (i % 2 === 0) {
      console.log(`${i}^2 = ${i ** 2}`);
    }
    i++;
  }
}

main();
