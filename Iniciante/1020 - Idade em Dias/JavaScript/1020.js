function main() {
  const input =require("fs").readFileSync("/dev/stdin", "utf8");
  const personAge = parseInt(input);
  const DAYS_PER_YEAR = 365;
  const DAYS_PER_MONTH = 30;
  const years = Math.trunc(personAge / DAYS_PER_YEAR);
  const remainingDays = personAge % DAYS_PER_YEAR;
  const months = Math.trunc(remainingDays / DAYS_PER_MONTH);
  const days = Math.trunc(remainingDays % DAYS_PER_MONTH);
  console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
}

main();
