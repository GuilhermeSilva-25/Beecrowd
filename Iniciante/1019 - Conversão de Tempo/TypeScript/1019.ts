import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const N: number = parseInt(input);
  const TOTAL_SECONDS_ONE_HOUR: number = 3600;
  const TOTAL_MINUTES_ONE_HOUR: number = 60;
  const hours: number = Math.trunc(N / TOTAL_SECONDS_ONE_HOUR);
  const remainingSeconds: number = N % TOTAL_SECONDS_ONE_HOUR;
  const minutes: number = Math.trunc(
    remainingSeconds / TOTAL_MINUTES_ONE_HOUR
  );
  const seconds: number = Math.trunc(
    remainingSeconds % TOTAL_MINUTES_ONE_HOUR
  );
  console.log(`${hours}:${minutes}:${seconds}`);
}

main();
