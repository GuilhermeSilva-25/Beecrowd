function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const SECONDS_IN_AN_DAY = 86400;
  const SECONDS_IN_AN_HOUR = 3600;
  const SECONDS_IN_AN_MINUTE = 60;
  let values = lines[0].split(" ");
  const startDay = parseInt(values[1]);
  values = lines[1].split(" : ");
  const startHour = parseInt(values[0]);
  const startMinute = parseInt(values[1]);
  const startSecond = parseInt(values[2]);
  const start =
    startDay * SECONDS_IN_AN_DAY +
    startHour * SECONDS_IN_AN_HOUR +
    startMinute * SECONDS_IN_AN_MINUTE +
    startSecond;
  values = lines[2].split(" ");
  const endDay = parseInt(values[1]);
  values = lines[3].split(" : ");
  const endHour = parseInt(values[0]);
  const endMinute = parseInt(values[1]);
  const endSecond = parseInt(values[2]);
  const end =
    endDay * SECONDS_IN_AN_DAY +
    endHour * SECONDS_IN_AN_HOUR +
    endMinute * SECONDS_IN_AN_MINUTE +
    endSecond;
  const duration = end - start;
  const day = Math.trunc(duration / SECONDS_IN_AN_DAY);
  let leftover = duration % SECONDS_IN_AN_DAY;
  const hour = Math.trunc(leftover / SECONDS_IN_AN_HOUR);
  leftover %= SECONDS_IN_AN_HOUR;
  const minute = Math.trunc(leftover / SECONDS_IN_AN_MINUTE);
  const second = leftover % SECONDS_IN_AN_MINUTE;
  console.log(`${day} dia(s)`);
  console.log(`${hour} hora(s)`);
  console.log(`${minute} minuto(s)`);
  console.log(`${second} segundo(s)`);
}

main();
