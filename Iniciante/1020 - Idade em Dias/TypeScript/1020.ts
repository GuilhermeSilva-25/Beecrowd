import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const personAge: number = parseInt(input);
  const DAYS_PER_YEAR: number = 365;
  const DAYS_PER_MONTH: number = 30;
  const years: number = Math.trunc(personAge / DAYS_PER_YEAR);
  const remainingDays: number = personAge % DAYS_PER_YEAR;
  const months: number = Math.trunc(remainingDays / DAYS_PER_MONTH);
  const days: number = Math.trunc(remainingDays % DAYS_PER_MONTH);
  console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
}

main();
