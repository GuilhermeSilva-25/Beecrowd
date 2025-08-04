import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const SECONDS_IN_AN_DAY: number = 86400;
  const SECONDS_IN_AN_HOUR: number = 3600;
  const SECONDS_IN_AN_MINUTE: number = 60;
  let values: string[] = lines[0].split(" ");
  const startDay: number = parseInt(values[1]);
  values = lines[1].split(" : ");
  const startHour: number = parseInt(values[0]);
  const startMinute: number = parseInt(values[1]);
  const startSecond: number = parseInt(values[2]);
  const start: number =
    startDay * SECONDS_IN_AN_DAY +
    startHour * SECONDS_IN_AN_HOUR +
    startMinute * SECONDS_IN_AN_MINUTE +
    startSecond;
  values = lines[2].split(" ");
  const endDay: number = parseInt(values[1]);
  values = lines[3].split(" : ");
  const endHour: number = parseInt(values[0]);
  const endMinute: number = parseInt(values[1]);
  const endSecond: number = parseInt(values[2]);
  const end: number =
    endDay * SECONDS_IN_AN_DAY +
    endHour * SECONDS_IN_AN_HOUR +
    endMinute * SECONDS_IN_AN_MINUTE +
    endSecond;
  const duration: number = end - start;
  const day: number = Math.trunc(duration / SECONDS_IN_AN_DAY);
  let leftover: number = duration % SECONDS_IN_AN_DAY;
  const hour: number = Math.trunc(leftover / SECONDS_IN_AN_HOUR);
  leftover %= SECONDS_IN_AN_HOUR;
  const minute: number = Math.trunc(leftover / SECONDS_IN_AN_MINUTE);
  const second: number = leftover % SECONDS_IN_AN_MINUTE;
  console.log(`${day} dia(s)`);
  console.log(`${hour} hora(s)`);
  console.log(`${minute} minuto(s)`);
  console.log(`${second} segundo(s)`);
}

main();
