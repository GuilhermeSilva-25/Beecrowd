function main() {
  const input =  require('fs').readFileSync('/dev/stdin', 'utf8') ;
  let value = parseFloat(input);
  const banknotesList = [100, 50, 20, 10, 5, 2];
  const coinsList = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
  const leftover = calculationBanknotes(value, banknotesList);
  calculationCoins(leftover, coinsList);
}

function print(text) {
  console.log(text);
}

function calculationBanknotes(value, banknotesList) {
  print("NOTAS:");
  for (let banknote of banknotesList) {
    let amountBanknotes = Math.trunc(value / banknote);
    print(`${amountBanknotes.toFixed(0)} nota(s) de R$ ${banknote}.00`);
    value -= amountBanknotes * banknote;
  }
  return value;
}

function calculationCoins(leftover, coinsList) {
  print("MOEDAS:");
  for (let coin of coinsList) {
    let amountCoins = Math.trunc((leftover + 0.00001) / coin);
    print(`${amountCoins.toFixed(0)} moeda(s) de R$ ${coin.toFixed(2)}`);
    leftover = parseFloat((leftover - amountCoins * coin).toFixed(2));
  }
}

main();
