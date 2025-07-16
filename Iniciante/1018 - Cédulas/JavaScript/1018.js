function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const value = parseInt(input);
  console.log(value);
  const banknotes = [100, 50, 20, 10, 5, 2, 1];
  necessaryBanknotes(banknotes, value);
}

function necessaryBanknotes(banknotes, value) {
  for (let i = 0; i < banknotes.length; i++) {
    let amountBanknotes = Math.trunc(value / banknotes[i]);
    console.log(`${amountBanknotes} nota(s) de R$ ${banknotes[i]},00`);
    value -= amountBanknotes * banknotes[i];
  }
}

main();
