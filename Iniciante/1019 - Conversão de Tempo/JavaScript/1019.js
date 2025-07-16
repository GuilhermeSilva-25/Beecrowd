function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const durationInSeconds = parseInt(input);
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;
  const hours = Math.trunc(durationInSeconds / SECONDS_PER_HOUR);
  const remainingSeconds = durationInSeconds % SECONDS_PER_HOUR;
  const minutes = Math.trunc(remainingSeconds / SECONDS_PER_MINUTE);
  const seconds = Math.trunc(remainingSeconds % SECONDS_PER_MINUTE);
  console.log(`${hours}:${minutes}:${seconds}`);
}

main();
