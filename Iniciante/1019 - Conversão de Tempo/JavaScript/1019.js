function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const N = parseInt(input);
  const TOTAL_SECONDS_ONE_HOUR = 3600;
  const TOTAL_MINUTES_ONE_HOUR = 60;
  const hours = Math.trunc(N / TOTAL_SECONDS_ONE_HOUR);
  const remainingSeconds = N % TOTAL_SECONDS_ONE_HOUR;
  const minutes = Math.trunc(
    remainingSeconds / TOTAL_MINUTES_ONE_HOUR
  );
  const seconds = Math.trunc(
    remainingSeconds % TOTAL_MINUTES_ONE_HOUR
  );
  console.log(`${hours}:${minutes}:${seconds}`);
}

main();
