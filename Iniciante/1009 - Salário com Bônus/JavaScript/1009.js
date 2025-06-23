function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const sellerName = lines.shift();
  const salary = parseFloat(lines.shift());
  const totalSales = parseFloat(lines.shift());
  const commission = 0.15;
  const totalSalary = salary + ( totalSales * commission);
  console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
}

main();
