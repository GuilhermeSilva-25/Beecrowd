function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const km = parseInt(input);
  const minutesPerKm = 2;
  const time = km * minutesPerKm;
  console.log(`${time} minutos`);
}

main();
