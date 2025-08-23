function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const pairs = checkNumbers(lines);
  console.log(`${pairs} valores pares`);
}

function checkNumbers(array) {
  let evenNumberCounter = 0;
  for (let i = 0; i < 5; i++) {
    let number = Number(array[i]);
    if (number % 2 === 0) {
      evenNumberCounter++;
    }
  }
  return evenNumberCounter;
}

main();
