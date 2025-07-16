import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const durationInSeconds: number = parseInt(input);
  const SECONDS_PER_HOUR: number = 3600;
  const SECONDS_PER_MINUTE: number = 60;
  const hours: number = Math.trunc(durationInSeconds / SECONDS_PER_HOUR);
  const remainingSeconds: number = durationInSeconds % SECONDS_PER_HOUR;
  const minutes: number = Math.trunc(remainingSeconds / SECONDS_PER_MINUTE);
  const seconds: number = Math.trunc(remainingSeconds % SECONDS_PER_MINUTE);
  console.log(`${hours}:${minutes}:${seconds}`);
}

main();
