function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const sellerName = lines.shift();
  const fixedSalary = parseFloat(lines.shift());
  const totalSalesMonth = parseFloat(lines.shift());
  const COMMISSION_RATE = 0.15;
  const totalSalary = totalSalesMonth * COMMISSION_RATE + fixedSalary;
  console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
}

main();
