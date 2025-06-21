function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const employeeNumber = parseInt(lines.shift());
  const hoursWorked = parseInt(lines.shift());
  const hourlyRate = parseFloat(lines.shift());
  const salary = hoursWorked * hourlyRate;
  console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${salary.toFixed(2)}`);
}

main();
