function main() {
  let I = 1;
  let J = 7;

  while (I <= 9) {
    let contador = 1;
    while (contador <= 3) {
      console.log(`I=${I} J=${J}`);
      J--;
      contador++;
    }
    I += 2;
    J = 7;
    contador = 1;
  }
}

main();
