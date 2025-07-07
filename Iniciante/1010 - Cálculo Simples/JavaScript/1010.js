function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  let amountToPay = 0;
  for (let i = 0; i < 2; i++) {
    let [codePartStr, amountPartStr, partValueStr] = lines[i].split(" ");
    let amountPart = parseInt(amountPartStr);
    let partValue = parseFloat(partValueStr);
    amountToPay += amountPart * partValue;
  }
  console.log(`VALOR A PAGAR: R$ ${amountToPay.toFixed(2)}`);
}

main();
