import * as fs from "fs";

function main(): void {
  const word: string = fs.readFileSync("/dev/stdin", "utf8").trim();
  const message: string = word.length >= 10 ? "palavrao" : "palavrinha";
  console.log(message);
}

main();
