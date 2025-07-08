function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const radiusSphere = parseFloat(input);
  const PI = 3.14159;
  const volume = (4.0 / 3.0) * PI * Math.pow(radiusSphere, 3);
  console.log(`VOLUME = ${volume.toFixed(3)}`);
}

main();
