function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");

  const N = parseInt(input);

  console.log(conversao(N));
}

function conversao(n) {
  const horas = Math.trunc(n / 3600);
  const minutos = Math.trunc((n % 3600) / 60);
  const segundos = Math.trunc((n % 3600) % 60);

  return `${horas}:${minutos}:${segundos}`;
}

main();
