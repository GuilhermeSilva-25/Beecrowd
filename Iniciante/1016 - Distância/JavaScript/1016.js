function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const distance = parseInt(input);
  const time = calculateTime(distance);
  console.log(`${time} minutos`);
}

function calculateTime(distance) {
  return distance * 2;
}

main();