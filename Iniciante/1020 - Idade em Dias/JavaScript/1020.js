function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");

  const idadeDias = parseInt(input);

  console.log(conversao(idadeDias));
}

function conversao(x) {
  let anos = Math.trunc(x / 365);
  x -= anos * 365;
  let mes = Math.trunc(x / 30);
  x -= mes * 30;
  let dias = x;

  return `${anos} ano(s)\n${mes} mes(es)\n${dias} dia(s)`;
}

main();
