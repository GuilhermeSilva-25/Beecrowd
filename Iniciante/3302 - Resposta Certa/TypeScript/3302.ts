import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const numberOfQuestions: number = parseInt(lines.shift()!);
  for (let i = 1; i <= numberOfQuestions; i++) {
    let value: number = parseInt(lines.shift()!);
    console.log(`resposta ${i}: ${value}`);
  }
}

main();
