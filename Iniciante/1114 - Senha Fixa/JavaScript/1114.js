function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");
  const senhaCorreta = 2002;
  let validador = 0;

  for (let i = 0; validador === 0; i++) {
    let senha = lines[i];
    if (senha == senhaCorreta) {
      console.log("Acesso Permitido");
      validador = 1;
    } else {
      console.log("Senha Invalida");
    }
  }
}

main();
