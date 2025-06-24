import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const km: number = parseInt(input);
  const minutesPerKm: number = 2;
  const time: number = km * minutesPerKm;
  console.log(`${time} minutos`);
}

main();
