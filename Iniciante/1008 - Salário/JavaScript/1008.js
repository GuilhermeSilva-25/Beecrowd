function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const employeeNumber = parseInt(lines.shift());
  const hoursWorked = parseInt(lines.shift());
  const hourValue= parseFloat(lines.shift());
  const salary = hourValue * hoursWorked;
  console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${salary.toFixed(2)}`);
}

main();
