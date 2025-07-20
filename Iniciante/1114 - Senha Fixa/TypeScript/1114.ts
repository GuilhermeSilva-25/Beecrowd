import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const CORRECT_PASSWORD: number = 2002;
  while (true) {
    const password: number = parseInt(lines.shift());
    if (password === CORRECT_PASSWORD) {
      console.log("Acesso Permitido");
      break;
    } else {
      console.log("Senha Invalida");
    }
  }
}

main();
