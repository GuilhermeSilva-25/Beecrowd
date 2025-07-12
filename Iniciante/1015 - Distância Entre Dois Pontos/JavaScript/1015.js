function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [x1, y1] = lines[0].split(" ").map(parseFloat);
  const [x2, y2] = lines[1].split(" ").map(parseFloat);
  const distance = calculateDistance(x1, x2, y1, y2);
  console.log(`${distance.toFixed(4)}`);
}

function calculateDistance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

main();
