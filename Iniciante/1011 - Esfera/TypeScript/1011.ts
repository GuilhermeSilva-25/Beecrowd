import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const radiusSphere: number = parseFloat(input);
  const PI: number = 3.14159;
  const volume: number = (4.0 / 3.0) * PI * Math.pow(radiusSphere, 3);
  console.log(`VOLUME = ${volume.toFixed(3)}`);
}

main();
