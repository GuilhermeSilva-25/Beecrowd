function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const CORRECT_PASSWORD = 2002;
  while (true) {
    const password = parseInt(lines.shift());
    if (password === CORRECT_PASSWORD) {
      console.log("Acesso Permitido");
      break;
    } else {
      console.log("Senha Invalida");
    }
  }
}

main();
