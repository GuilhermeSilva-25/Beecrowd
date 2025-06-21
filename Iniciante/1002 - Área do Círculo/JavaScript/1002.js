function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const PI = 3.14159;
  const raio = parseFloat(input);
  const area = PI * (raio ** 2);
  console.log(`A=${area.toFixed(4)}`);
}

main();
