function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const numberOfQuestions = parseInt(lines.shift());
  for (let i = 1; i <= numberOfQuestions; i++) {
    let value = parseInt(lines.shift());
    console.log(`resposta ${i}: ${value}`);
  }
}

main();
