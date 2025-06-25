function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  let totalValue = 0;

  for (let i = 0; i < 2; i++) {
    let item = lines[i].split(" ");
    let code = parseInt(item[0]);
    let amount = parseInt(item[1]);
    let value = parseFloat(item[2]);
    totalValue += amount * value;
  }

  console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`);
}

main();
